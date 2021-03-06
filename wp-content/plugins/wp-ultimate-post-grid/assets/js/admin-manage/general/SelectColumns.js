import React from 'react';

import { __wpupg } from 'Shared/Translations';

import '../../../css/admin/manage/select-columns.scss';
 
const SelectColumns = (props) => {
    return (
        <div className="wpupg-admin-manage-select-columns-container">
            <div className="wpupg-admin-manage-select-columns">
            {
                props.columns.map( (column, index) => {
                    if ( 'actions' === column.id ) {
                        return null;
                    }

                    const selected = props.selectedColumns.includes(column.id);
                    const filtered = props.filteredColumns.includes(column.id);

                    let classNames = ['wpupg-admin-manage-select-columns-column'];
                    if ( selected ) { classNames.push( 'wpupg-admin-manage-select-columns-column-selected' ) }
                    if ( filtered ) { classNames.push( 'wpupg-admin-manage-select-columns-column-filtered' ) }

                    return (
                        <span
                            className={ classNames.join( ' ' ) }
                            onClick={(e) => {
                                e.preventDefault();
                                if ( ! filtered ) {
                                    props.onColumnsChange( column.id, ! selected );
                                }
                            }}
                            key={index}
                        >{ column.Header }</span>
                    );
                })
            }
            </div>
        </div>
    );
}
export default SelectColumns;