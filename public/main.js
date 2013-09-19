var pipeline = AeroGear.Pipeline();

var filepip = pipeline.add({
    name: "filepipe"
}).pipes.filepipe;

$(':button').click(function(){
    var formData = {
        file: $("input[type='file']")[0].files[0]
    };

    filepip.save( formData, {
        success: function(){
            console.log( "success", arguments );
        },
        error: function() {
            console.log( "error", arguments );
        },
        progress: function( event ) {
            console.log( "progress", arguments );
            $( "#pp" ).attr( "value", event.position );
            $( "#pp" ).attr( "max", event.totalSize );
        }
    } );
});

