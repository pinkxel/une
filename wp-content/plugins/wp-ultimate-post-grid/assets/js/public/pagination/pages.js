import animateScrollTo from 'animated-scroll-to';

window.WPUPG_Pagination_pages = {
    init: ( gridElemId, args ) => {
        const id = `${ gridElemId }-pagination`;
        const elem = document.querySelector( '#' + id );

        let pagination = {
            gridElemId,
            args,
            id,
            elem,
            page: 0,
            pagesLoaded: [0],
            totalPages: false,
            getDeeplink() {
                return this.page ? `p:${ this.page }` : '';
            },
            restoreDeeplink( key, value ) {
                if ( 'p' === key ) {
                    const button = this.elem.querySelector( `.wpupg-pagination-term.wpupg-page-${ value }` );

                    if ( button ) {
                        return new Promise((resolve) => {
                            this.onClickButton( button, () => {
                                resolve();
                            } );
                        });
                    }
                }
            },
            getSelector() {
                if ( this.adaptingPages ) {
                    return '';
                } else {
                    return `.wpupg-page-${ this.page }`;   
                }
            },
            onClickButton( button, callback = false ) {
                const wasActive = button.classList.contains( 'active' );

                if ( ! wasActive ) {
                    // Deactivate other buttons.
                    for ( let otherButton of this.buttons ) {
                        otherButton.classList.remove( 'active' );
                    }

                    // Set current button active.
                    button.classList.add( 'active' );

                    // Scroll to top of grid if not in view.
                    const gridElem = WPUPG_Grids[ this.gridElemId ].elem;
                    const bounding = gridElem.getBoundingClientRect();

                    if ( bounding.top < 0 ) {
                        animateScrollTo( gridElem, {
                            verticalOffset: -100,
                            speed: 500,
                        } );
                    }

                    // Load page.
                    this.changePage( button, ( page ) => {
                        this.page = page;

                        // Trigger grid filter.
                        WPUPG_Grids[ pagination.gridElemId ].filter();

                        // Optional callback.
                        if ( false !== callback ) {
                            callback( page );
                        }
                    });
                }
            },
            changePage( button, callback = false ) {
                const page = parseInt( button.dataset.page );

                if ( this.pagesLoaded.includes( page ) || ( this.args.adaptive_pages && '.wpupg-item' !== this.currentFilterString ) ) {
                    callback( page );
                } else {
                    // Set Loading state for button.
                    const buttonStyle = window.getComputedStyle( button );
                    const backgroundColor = buttonStyle.getPropertyValue( 'background-color' );

                    button.style.color = backgroundColor;
                    button.classList.add( 'wpupg-spinner' );

                    // Load next page.
                    WPUPG_Grids[ pagination.gridElemId ].loadItems({
                        page,
                    }, () => {
                        button.classList.remove( 'wpupg-spinner' );
                        button.style.color = '';

                        this.pagesLoaded.push( page );

                        if ( false !== callback ) {
                            callback( page );
                        }
                    })
                }
            },
            adaptingPages: false,
            currentFilterString: '.wpupg-item',
            adaptPages() {
                if ( this.args.adaptive_pages ) {
                    const grid = WPUPG_Grids[ pagination.gridElemId ];

                    // Get current filter string without page selector. If empty, it matches everything.
                    this.adaptingPages = true;
                    let filterString = grid.getFilterString();
                    this.adaptingPages = false;

                    if ( '' === filterString ) {
                        filterString = '.wpupg-item';
                    }
                    filterString = filterString.replace( ':', '.wpupg-item:' );

                    if ( filterString !== this.currentFilterString ) {
                        this.currentFilterString = filterString;
                        
                        // Remove any wpupg-page-x class.
                        const items = grid.elem.querySelectorAll( '.wpupg-item' );
                        for ( let item of items ) {
                            item.className = item.className.replace( /wpupg\-page\-\d+/gm, '' );
                        }                        

                        // Find how many items match this filter string.
                        const filteredItems = grid.elem.querySelectorAll( filterString );

                        let page = 0;
                        let itemsInPage = 0;

                        for ( let item of filteredItems ) {
                            item.classList.add( `wpupg-page-${page}` );
                            itemsInPage++;

                            if ( itemsInPage >= this.args.posts_per_page ) {
                                page++;
                                itemsInPage = 0;
                            }
                        }

                        // Show/hide page buttons as needed.
                        let totalPages = this.totalPages;
                        if ( ! totalPages || '.wpupg-item' !== filterString ) {
                            totalPages = 0 < itemsInPage ? page + 1 : page;
                        }

                        let pageButton = 0;
                        for ( let button of this.buttons ) {
                            button.classList.remove( 'active' );

                            if ( pageButton < totalPages ) {
                                button.style.display = '';

                                if ( 0 === pageButton ) {
                                    button.classList.add( 'active' );
                                }
                            } else {
                                button.style.display = 'none';
                            }
                            pageButton++;
                        }

                        // Starting at page 0.
                        this.page = 0;
                    }
                }
            },
            init() {
                if ( this.buttons && 0 < this.buttons.length ) {
                    WPUPG_Grids[ pagination.gridElemId ].on( 'filter', () => {
                        this.adaptPages();
                    });
                }
            },
        }

        if ( elem ) {
            pagination.buttons = elem.querySelectorAll( '.wpupg-pagination-term' );
            pagination.totalPages = pagination.buttons.length;

            // Add event listeners.
            for ( let button of pagination.buttons ) {
                button.addEventListener( 'click', (e) => {
                    if ( e.which === 1 ) { // Left mouse click.
                        pagination.onClickButton( button );
                    }
                } );
                button.addEventListener( 'keydown', (e) => {
                    if ( e.which === 13 || e.which === 32 ) { // Space or ENTER.
                        pagination.onClickButton( button );
                    }
                } );
            }
        }

        return pagination;
    },
}