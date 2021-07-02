<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'une_dev_pinkxel_com');

/** MySQL database username */
define('DB_USER', 'unedevpinkxelcom');

/** MySQL database password */
define('DB_PASSWORD', 'XnJrG8mW');

/** MySQL hostname */
define('DB_HOST', 'mysql.une.dev.pinkxel.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'SKL"aB|dv4;5+h@3q?N/dSlwD^v8Nc*xejI0?1Uekg7dF3D?/1vRanqte2CzZ0jA');
define('SECURE_AUTH_KEY',  '1Q^w_~z9KJBKmI:Ly"*Y28*BlW"6/HM7gc|"mg(2b(o;BZLU$Rz%X9EUMI!7x&NX');
define('LOGGED_IN_KEY',    'F+??M#q+/4`~j%6?b!)Fa:JJE`SGMoBUAs%Z|Q2LG0FoXxHcvlU$pWI?51%YFp!L');
define('NONCE_KEY',        'Sy1@&`Lk":"2vY(h"1Q+E+e;`E2xw^v:f6@U42R%RIkhcx5VqEq|bXBfFH/Py@#z');
define('AUTH_SALT',        'jvD1g%lSW6|iR8:N"ruTb7|kS!%fZgr@W59PBYH&_`grORnyB;&5NX/DoP:3tB+v');
define('SECURE_AUTH_SALT', 'OF5yuloX_ddbFpohOv7wrD_JqF"/K^nlgJ"D6"(Qz#HH2)|^TX:%A*S!yY_KX"th');
define('LOGGED_IN_SALT',   'TCp?_MkYgUNxof;tCWH9F20m4pGK7%5ei&~Y6i;lzAt+:~#3JOhjMbrr~MlGk0I)');
define('NONCE_SALT',       'rIc0RcC!|#!?q@#w&x+L/;5@zi:8&fwuYx+p1ymeSwD0IHSk&:KoaS^NH$r@7Zhn');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_bfx2tx_';

/**
 * Limits total Post Revisions saved per Post/Page.
 * Change or comment this line out if you would like to increase or remove the limit.
 */
define('WP_POST_REVISIONS',  10);

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/**
 * Removing this could cause issues with your experience in the DreamHost panel
 */

if (preg_match("/^(.*)\.dream\.website$/", $_SERVER['HTTP_HOST'])) {
        $proto = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? "https" : "http";
        define('WP_SITEURL', $proto . '://' . $_SERVER['HTTP_HOST']);
        define('WP_HOME',    $proto . '://' . $_SERVER['HTTP_HOST']);
}

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

