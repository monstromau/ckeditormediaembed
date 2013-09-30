/*
* Embed Media Dialog based on Fabian Vogelsteller [frozeman.de]
* Added support for i18n
*
* Plugin name:      mediaembed
* Menu button name: MediaEmbed
*
* Youtube Editor Icon
* http://paulrobertlloyd.com/
*
* @author Miguel Castro [textovirtual.com]
* @version 0.1
*/
( function() {
    CKEDITOR.plugins.add( 'mediaembed',
    {
        lang : 'en,pt', // %REMOVE_LINE_CORE%
        icons: 'mediaembed', // %REMOVE_LINE_CORE%
        hidpi: true, // %REMOVE_LINE_CORE%
        init: function( editor )
        {
           var me = this;
           CKEDITOR.dialog.add( 'MediaEmbedDialog', function (instance)
           {
              return {
                 title : editor.lang.mediaembed.title,
                 minWidth : 550,
                 minHeight : 200,
                 contents :
                       [
                          {
                             id : 'iframe',
                             expand : true,
                             elements :[{
                                id : 'embedArea',
                                type : 'textarea',
                                label : editor.lang.mediaembed.label,
                                'autofocus':'autofocus',
                                setup: function(element){
                                },
                                commit: function(element){
                                }
                              }]
                          }
                       ],
                  onOk: function() {
                        var div = instance.document.createElement('div');
                        div.setHtml(this.getContentElement('iframe', 'embedArea').getValue());
                        instance.insertElement(div);
                  }
              };
           } );

            editor.addCommand( 'MediaEmbed', new CKEDITOR.dialogCommand( 'MediaEmbedDialog',
                { allowedContent: 'iframe[*]' }
            ) );

            editor.ui.addButton( 'MediaEmbed',
            {
                label: editor.lang.mediaembed.button,
                command: 'MediaEmbed',
                toolbar: 'mediaembed'
            } );
        }
    } );
} )();
