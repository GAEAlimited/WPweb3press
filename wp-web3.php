<?php

/** 
 * Plugin Name: Web3
 * Author Md: Saffron Chariot Technologies
 * Author URI: https://saffronchariot.com/
 * Plugin URI: https://saffronchariot.com/web3/
 * Version: 1.0.0
 * Description: Web3 plugin to connect your website with blockhain, this plugin connect your website with ehtereum smart contract with MetaMask.
 * Text-Domain: web3
 */

if (!defined('ABSPATH')) : exit();
endif; // no direct access allowed 

/**
 * Define Plugins Constants
 */

define('WEB3_PATH', trailingslashit(plugin_dir_path(__FILE__)));

define('WEB3_URL', trailingslashit(plugins_url('/', __FILE__)));

/**
 * Loading Necessary Scripts  
 */

add_action('admin_enqueue_scripts', 'load_scripts');

function load_scripts()
{
  wp_enqueue_script('web3', WEB3_URL . 'dist/bundle.js', ['jquery', 'wp-element'], wp_rand(), true);

  wp_localize_script('web3', 'appLocalizer', [
    'apiURL' => home_url('/wp-json'),
    'nonce' => wp_create_nonce('wp_rest')
  ]);
}

require_once WEB3_PATH . '/classes/class-create-admin-menu.php';
