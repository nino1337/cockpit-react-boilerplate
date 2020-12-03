<?php
 return array (
  'name' => 'pages',
  'label' => 'Seiten',
  '_id' => 'Pages',
  'fields' => 
  array (
    0 => 
    array (
      'name' => 'metaTitle',
      'label' => 'Meta-Title',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'group' => 'Meta-Information',
      'localize' => true,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => false,
      'acl' => 
      array (
      ),
      'required' => false,
    ),
    1 => 
    array (
      'name' => 'metaDescription',
      'label' => 'Meta-Description',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'group' => 'Meta-Information',
      'localize' => true,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => false,
      'acl' => 
      array (
      ),
      'required' => false,
    ),
    2 => 
    array (
      'name' => 'indexable',
      'label' => 'Für Suchmaschinen veröffentlichen',
      'type' => 'boolean',
      'default' => '',
      'info' => '',
      'group' => 'Meta-Information',
      'localize' => false,
      'options' => 
      array (
        'default' => true,
      ),
      'width' => '1-1',
      'lst' => false,
      'acl' => 
      array (
      ),
    ),
    3 => 
    array (
      'name' => 'title',
      'label' => 'Seitentitel',
      'type' => 'text',
      'default' => '',
      'info' => 'Aus dem Seitentitel wird die URL-Slug generiert.',
      'group' => 'Allgemein',
      'localize' => true,
      'options' => 
      array (
        'slug' => true,
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
      'name' => 'published',
      'label' => 'Published',
      'type' => 'boolean',
      'default' => '',
      'info' => 'Seite veröffentlichen',
      'group' => 'Allgemein',
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
      'name' => 'navigation',
      'label' => 'Navigation',
      'type' => 'boolean',
      'default' => '',
      'info' => 'Anschalten, um die Seite in der Navigation anzeigen zu lassen.',
      'group' => 'Navigation',
      'localize' => false,
      'options' => 
      array (
        'fields' => 
        array (
          0 => 
          array (
            'name' => 'header',
            'type' => 'boolean',
          ),
        ),
      ),
      'width' => '1-1',
      'lst' => false,
      'acl' => 
      array (
      ),
      'required' => false,
    ),
    6 => 
    array (
      'name' => 'components',
      'label' => 'Elemente',
      'type' => 'layout',
      'default' => '',
      'info' => '',
      'group' => 'Content',
      'localize' => true,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => false,
      'acl' => 
      array (
      ),
      'required' => true,
    ),
  ),
  'sortable' => true,
  'in_menu' => false,
  '_created' => 1603983467,
  '_modified' => 1607029965,
  'color' => '#3C3B3D',
  'acl' => 
  array (
    'author' => 
    array (
      'entries_view' => true,
      'entries_edit' => true,
      'entries_create' => true,
      'entries_delete' => true,
    ),
  ),
  'sort' => 
  array (
    'column' => '_created',
    'dir' => -1,
  ),
  'rules' => 
  array (
    'create' => 
    array (
      'enabled' => false,
    ),
    'read' => 
    array (
      'enabled' => false,
    ),
    'update' => 
    array (
      'enabled' => false,
    ),
    'delete' => 
    array (
      'enabled' => false,
    ),
  ),
  'icon' => '',
  'contentpreview' => 
  array (
    'enabled' => true,
    'url' => 'http://localhost:3000/preview',
  ),
  'group' => '',
);