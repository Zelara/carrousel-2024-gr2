<?php

/**
 * Plugin Name: Carrousel
 * Description: Affiche un carrousel d'images contrôlé par des boutons
 * Author: James Ling
 * Version: 1.0.0  
 */

function eddym_enqueue()
{
    $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");
    wp_enqueue_style(
        'em_plugin_carrousel_css',
        plugin_dir_url(__FILE__) . "style.css",
        array(),
        $version_css
    );

    wp_enqueue_script(
        'em_plugin_carrousel_js',
        plugin_dir_url(__FILE__) . "js/carrousel.js",
        array(),
        $version_js,
        true
    ); // true permet d'ajouter le script à la fin du document
}

add_action('wp_enqueue_scripts', 'eddym_enqueue');
// IMPORTANT 
// Dans header.php
// wp_header() juste avant la balise fermeture de </head> 
// Dans footer.php
// wp_footer() juste avant la balise fermeture de </body>

function genere_html()
{
    $contenu = '
    <div class="carrousel">
      <button class="carrousel__x">X</button>
      <figure class="carrousel__figure"></figure>
      <form class="carrousel__form"></form>
      <button class="carrousel__fleche carrousel__fleche--gauche">&#9664;</button>
      <button class="carrousel__fleche carrousel__fleche--droite">&#9654;</button>
    </div>';
    return $contenu;
}
add_shortcode('carrousel', 'genere_html');
