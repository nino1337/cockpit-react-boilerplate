<?php
 return array (
  'name' => 'siteSettings',
  'label' => 'Webseiten-Einstellungen',
  '_id' => 'siteSettings',
  'fields' => 
  array (
    0 => 
    array (
      'name' => 'name',
      'label' => 'Webseiten-Name',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => true,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => true,
    ),
    1 => 
    array (
      'name' => 'description',
      'label' => 'Beschreibung der Webseite',
      'type' => 'textarea',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => true,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => true,
    ),
    2 => 
    array (
      'name' => 'favIcon',
      'label' => 'Favicon',
      'type' => 'image',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => true,
    ),
    3 => 
    array (
      'name' => 'homepage',
      'label' => 'Startseite',
      'type' => 'collectionlink',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'link' => 'pages',
        'display' => 'Startseite',
        'multiple' => false,
        'limit' => false,
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => true,
    ),
    4 => 
    array (
      'name' => 'headerLogo',
      'label' => 'Header Logo',
      'type' => 'image',
      'default' => '',
      'info' => '',
      'group' => 'Header',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => false,
    ),
    5 => 
    array (
      'name' => 'footerLogos',
      'label' => 'Footer Logos',
      'type' => 'repeater',
      'default' => '',
      'info' => '',
      'group' => 'Footer',
      'localize' => false,
      'options' => 
      array (
        'field' => 
        array (
          'type' => 'image',
          'label' => 'Logo',
        ),
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => false,
    ),
    6 => 
    array (
      'name' => 'footerText',
      'label' => 'Footer-Copyright',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'group' => 'Footer',
      'localize' => true,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => true,
    ),
    7 => 
    array (
      'name' => 'footerLinks',
      'label' => 'Footer Links',
      'type' => 'repeater',
      'default' => '',
      'info' => '',
      'group' => 'Footer',
      'localize' => false,
      'options' => 
      array (
        'field' => 
        array (
          'type' => 'set',
          'label' => 'Footer Link',
          'options' => 
          array (
            'fields' => 
            array (
              0 => 
              array (
                'name' => 'url',
                'label' => 'Url',
                'type' => 'text',
              ),
              1 => 
              array (
                'name' => 'title',
                'label' => 'Titel',
                'type' => 'text',
              ),
            ),
          ),
        ),
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => false,
    ),
    8 => 
    array (
      'name' => 'primaryColor',
      'label' => 'Primär',
      'type' => 'color',
      'default' => '',
      'info' => ' Hintergrundfarbe für Header und Content-Box-Titel und Link-Farbe.',
      'group' => 'Theme',
      'localize' => false,
      'options' => 
      array (
        'fields' => 
        array (
          0 => 
          array (
            'name' => 'Primär',
            'type' => 'Color',
          ),
          1 => 
          array (
            'name' => 'Highlight',
            'type' => 'Color',
          ),
          2 => 
          array (
            'name' => 'RWTH',
            'type' => 'Color',
          ),
        ),
      ),
      'width' => '1-3',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => true,
    ),
    9 => 
    array (
      'name' => 'secondaryColor',
      'label' => 'Sekundär',
      'type' => 'color',
      'default' => '',
      'info' => 'Hintergrundfarbe der Webseite.',
      'group' => 'Theme',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-3',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => true,
    ),
    10 => 
    array (
      'name' => 'textColor',
      'label' => 'Text',
      'type' => 'color',
      'default' => '',
      'info' => '',
      'group' => 'Theme',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-3',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => true,
    ),
  ),
  'data' => NULL,
  '_created' => 1603984709,
  '_modified' => 1606909456,
  'description' => '',
  'acl' => 
  array (
    'author' => 
    array (
      'form' => true,
    ),
  ),
  'color' => '#3C3B3D',
);