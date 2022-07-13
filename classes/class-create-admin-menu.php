<?php

/**
 * This file will create admin menu page.
 */

class WPRW_CREATE_ADMIN_PAGE
{
  public function __construct()
  {
    add_action('admin_menu', [$this, 'create_admin_menu']);
  }

  public function create_admin_menu()
  {
    $capability = 'manage_options';
    $slug = 'web3_settings';

    add_menu_page(
      _('Web3 Connector'),
      _('Web3 Connector'),
      $capability,
      $slug,
      [$this, 'menu_page_template'],
      'dashicons-align-full-width'
    );
  }

  public function menu_page_template()
  {
    echo "<div class='wrap'> <div id='web3_web3'>
    </div></div>";
  }
}

new WPRW_CREATE_ADMIN_PAGE();
