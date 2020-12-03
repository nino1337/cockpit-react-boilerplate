<?php
/**
 * Custom dashboard with grid for Cockpit CMS
 * 
 * @see       https://github.com/raffaelj/cockpit_DashboardGrid/
 * @see       https://github.com/agentejo/cockpit/
 * 
 * @version   0.1.1
 * @author    Raffael Jesche
 * @license   MIT
 */

if (COCKPIT_ADMIN && !COCKPIT_API_REQUEST) {
    include_once(__DIR__ . '/admin.php');
    // url to your favicon or a path shortcut, e. g.: `#uploads:...`
    $app->helper('admin')->favicon = '#uploads:2020/12/02/5fc763037ae42favicon.png';
}
