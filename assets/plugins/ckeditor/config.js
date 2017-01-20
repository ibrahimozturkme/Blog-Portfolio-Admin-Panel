/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

 CKEDITOR.editorConfig = function( config ) {
      config.toolbar = [
           {
                name	: 'mode',
                items	: ['Source']
           },
           {
                name	: 'document',
                items	: ['Print']
           },
           {
                name	: 'clipboard',
                items	: ['Undo', 'Redo']
           },
           {
                name	: 'styles',
                items	: ['Format', 'Font', 'FontSize']
           },
           {
                name	: 'basicstyles',
                items	: ['Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat', 'CopyFormatting']
           },
           {
                name	: 'colors',
                items	: ['TextColor', 'BGColor']
           },
           {
                name	: 'align',
                items	: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
           },
           {
                name	: 'links',
                items	: ['link', 'unlink']
           },
           {
                name	: 'list',
                items	: ['NumberedList', 'BulletedList']
           },
           {
                name	: 'indent',
                items	: ['Outdent', 'Indensst']
           },
           {
                name	: 'blocks',
                items	: ['Blockquote']
           },
           {
                name	: 'insert',
                items	: ['Image', 'Table', 'Iframe']
           },
           {
                name	: 'tools',
                items	: ['Maximize']
           },
           {
                name	: 'spellchecker',
                items	: ['Scayt']
           },
      ];
};
