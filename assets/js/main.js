jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    $("#rss-feeds").rss(
    
        //Change this to your own rss feeds
        "https://medium.com/feed/@foilking/",
        
        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 3,
        
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slideFastSynced',
        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='item'>{entries}</div>",
        
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'
        
        }
    );

    // $.ajax({
    //   type: 'POST',
    //   url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    //   data: {
    //     'key': 'YOUR API KEY HERE',
    //     'message': {
    //       'from_email': 'YOUR@EMAIL.HERE',
    //       'to': [
    //           {
    //             'email': 'RECIPIENT_NO_1@EMAIL.HERE',
    //             'name': 'RECIPIENT NAME (OPTIONAL)',
    //             'type': 'to'
    //           },
    //           {
    //             'email': 'RECIPIENT_NO_2@EMAIL.HERE',
    //             'name': 'ANOTHER RECIPIENT NAME (OPTIONAL)',
    //             'type': 'to'
    //           }
    //         ],
    //       'autotext': 'true',
    //       'subject': 'YOUR SUBJECT HERE!',
    //       'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
    //     }
    //   }
    //  }).done(function(response) {
    //    console.log(response); // if you're into that sorta thing
    //  });
});