//NO PYO AVAILABLE! SHED DOOR SALES ONLY.
featureFarmsInfo = [
    {imageUrl:"https://raw.githubusercontent.com/UPICKO/external_files/master/images/banner_example_etsy_rayner.png", hrefUrl:"https://www.upicko.com/en/listings/381521-raynerorchard-farms-upick-vic"},
// 	{imageUrl:"https://raw.githubusercontent.com/UPICKO/external_files/master/images/banner_example_etsy_gateway.png", hrefUrl:"https://www.upicko.com/en/listings/378583-gatewayestate-indoor-strawberry-upick-vic"}
];

fruitIconsInfo = {
    "apple":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/apple.png",  
    "blackberries":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/blackberries.png",
    "blackcurrant":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/blackcurrant.png",
    "blueberries":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/blueberries.png",
    "capsicum":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/capsicum.png",
    "cheries":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/cheries.png",
    "chestnuts":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/chestnuts.png",
    "gooseberries":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/gooseberries.png",
    "grapes":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/grapes.png",
    "lemon":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/lemon.png",
    "mandarine":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/mandarine.png",
    "oranges":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/oranges.png",
    "plums":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/plums.png",
    "raspbeerries":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/raspbeerries.png",
    "strawberries":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/strawberries.png",
    "tomatos":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/tomatos.png",
    "kiwifruit":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/kiwifruit.png",
    "nectarines":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/nectarines.png",
    "peaches":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/peaches.png",
    "apricots":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/apricots.png",
    "figs":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/figs.png",
    "bayberries":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/bayberries.png",
    "quinces":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/quinces.png",
    "boysonberries":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/boysonberries.png",
    "vegies":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/vegies.png",
    "sourcherries":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/sourcherries.png",
    "christmas_tree":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/christmas_tree.png",
    "pear":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/pear.png",
    "fruits":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/fruits.png",
    "loquat":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/loquat.png",
    "wattermelon":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/wattermelon.png",
    "longan":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/longan.png",
    "youngberry":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/youngberry.png",
    "loganberry":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/loganberry.png",
    "marionberry":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/marionberry.png",
    "walnuts":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/walnuts.png",
    "honey":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/honey.png",
    "persimmons":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/persimmons.png",
    "feijoas":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/feijoas.png",
    "tropicalFruits":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/tropicalFruits.png",
    "chocolate":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/chocolate.png",
    "mango":"https://raw.githubusercontent.com/UPICKO/external_files/master/images/fruit_icon_png/mango.png",
};

stateInfo = [
    "NSW", "VIC", "QLD", "SA", "TAS", "WA", "NT"
]

inSeasonFruits = [
    "Mandarines", "Kiwi Fruit", "Strawberries"
]


$(function() {
    if(typeof localStorage != 'undefined') {
        var firstTime = localStorage.getItem("first_time");
        if(firstTime != "1") {
            localStorage.setItem("first_time","1");
        }
    }

    //$('#homepage-filters').show();
    if(window.location.href == 'https://www.upicko.com/' || window.location.href == 'https://www.upicko.com') {
        if(!checkTemplateLiteralSupported()) {
            alert("Your browser is not supported. Please consider using Chrome, Firefox or Microsoft Edge");
        } else {
            $('#homepage-filters').remove();
            $("body").append("<div id='spinner_landing_page' style='margin-top: 10px; text-align: center'><img width='80em' src='https://raw.githubusercontent.com/UPICKO/external_files/master/images/spinner.gif'/></div>");
            $.getScript( "https://drive.google.com/uc?export=download&id=0B5fEP3aSxchLVzZBLTZBZUlWZ0E", function( data, textStatus, jqxhr ) {
                $("body").append(landingPageHtml);
            });
        }
    } else if(window.location.href == 'https://www.upicko.com/en/' || window.location.href == 'https://www.upicko.com/en') {
        window.location = "https://www.upicko.com/en/?category=u-pick-access";
    } else if(window.location.href == 'https://www.upicko.com/zh/' || window.location.href == 'https://www.upicko.com/zh') {
        window.location = "https://www.upicko.com/zh/?category=u-pick-access";
    } else {
        $('#homepage-filters').show();
    }

    // Clear the query text when the query is state
    if($(".SearchBar__keywordInput__2HTav").length) {
        var q = getUrlParameter("q");
        if(q) {
            if(jQuery.inArray(q, stateInfo) != -1)
                $(".SearchBar__keywordInput__2HTav").val("")
        }
    }

    if(window.location.href.indexOf("/listings/") > 0) {
        //Load the farmer's list in listing detail page
        if($("#listing-author-link").length > 0 && $("#listing-author-link").attr('href') && $("#listing-author-link").text() != 'Upicko') {
            $.ajax({
                type: "GET",
                url: $("#listing-author-link").attr('href'),
                success: function (resultData) {
                    var profileListingsList = $('#profile-listings-list', $(resultData));
                    var profileListLabel = profileListingsList.prev();
                    var listingDetailContainer = $('.page-content .wrapper');
                    listingDetailContainer.append($(profileListLabel.html() + profileListingsList.html()));
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log(xhr);
                }
            });
        }

        //Add address info below the small map
        if($(".map-link a").length) {
            var openInGoogleMapHref = $(".map-link a").attr("href");
            var decodedUri = decodeURIComponent(openInGoogleMapHref);
            var addressString = decodedUri.substring(27);
            var addressStringFinal = addressString.replaceAll("+", " ");
            $(".map-link").before("<div style='margin-top: 5px;'><i>" + addressStringFinal + "</i></div>");
        }

        //Add farm's name at the beginning of the page
        if($(".wrapper").length) {
            var url = window.location.href;
            var farmNameWidthId = url.substring(35, url.length);
            var farmNameWithHyphen = farmNameWidthId.substring(farmNameWidthId.indexOf("-") + 1);
            var farmName = farmNameWithHyphen.replaceAll("-", " ");
            var farmNameWithCamelCase = toTitleCase(farmName);

            var state = farmNameWithCamelCase.substring(farmNameWithCamelCase.lastIndexOf(" ") + 1, farmNameWithCamelCase.length);
            var upperCaseState = state.toUpperCase();
            if(jQuery.inArray(upperCaseState, stateInfo) != -1) {
                var farmnameWithoutState = farmNameWithCamelCase.substring(0, farmNameWithCamelCase.lastIndexOf(" "));
                farmNameWithCamelCase = farmnameWithoutState + " - " + upperCaseState;
            }

            $(".wrapper").prepend("<div style='margin-bottom: 20px; font-size: 27px'>" + farmNameWithCamelCase + "</div>");
        }
    }

    //Remove the category row in home page
    if($(".home-toolbar").length && $(".home-toolbar").next().length && $(".home-toolbar").next().find('.row').length && $(".home-toolbar").next().find('.row').first().length) {
        $(".home-toolbar").next().find('.row').first().remove();
    }

    //Add banner page with search box in home page
    if($(".home-toolbar").length && $(".Topbar__topbar__7GUWt").length) {
        $(".Topbar__topbar__7GUWt").after(getBannerHtml());
        // Move search bar in home page
        $("#topbar-container .SearchBar__root__2hIPj").show();
        processMoveSearchBar();
        $(window).resize(function() {
            processMoveSearchBar();
        });
    }

    //Display marketing banner on home page for private web mode
    if($('.community-customization-wrapper').length && $(".marketplace-lander").length) {
        $(".marketplace-lander").show();
    }

    if(typeof map != 'undefined' && map) {
        // Disable clickable landmarks in google map
        map.setClickableIcons(false);
        // Disable mouse scroll zoom
        map.setOptions({ scrollwheel: false });
        // Enable Scale control
        map.setOptions({ zoomControl: true});
    }
    // Disable google map cluster for home page
    if(typeof markerCluster != 'undefined' && markerCluster) {
        if(window.location.href.indexOf('category=u-pick-access') !== -1) {
            markerCluster.setMaxZoom(12);
        } else {
            markerCluster.setMaxZoom(22);
        }
    }

    //Replace default marker with fruit icon in google map in home page
    if($(".home-toolbar").length && markers && markers.length > 0 && markerContents && markerContents.length > 0) {
        for(i=0; i<markers.length; i++) {
            var marker = markers[i];
            var markerId = markerContents[i];
            switch(markerId) {
                case 391387: //Farnsworth Apple & Cherry Orchard
                case 391381: //Ripe Ready Cherry Farm
                case 351511: //Blue Hill Cherries Upick - VIC
                case 391411: //Chappies Upick - VIC
                case 391927: //Fair View Hill Berries - VIC
                case 371897: //Cobradah Upick - VIC
                case 391337: //Seville Farm - VIC
                case 370827: //Cherry Bomb Cherries - VIC
                case 370062: //Cherry Heaven - VIC
                case 371883: //Cherry Hill Upick - VIC
                case 391395: //Lanidale Cherry Orchard - VIC
                case 391921: //Big Fella Cherries - VIC
                case 392722: //hillsideharvest - NSW
                case 392726: //Lynton Cherry Orchards - NSW
                case 393794: //Main Range Cherry Orchard - NSW
                case 393796: //Stockman's Ridge Cherries - NSW
                case 393802: //Wombat Heights Cherry Farm - NSW
                case 393806: //Allambie Orchard - NSW
                case 393904: //George & Sue's Country Farm Produce - NSW
                case 394381: //Kembla Cherry Orchard - NSW
                case 394731: //Lavender Hill - NSW
                case 393804: //Ballinaclash Orchard & Cellar Door - NSW
                case 397874: //A.T. THOMPSON CHERRIES - SA
                case 398357: //Forest Range Cherries - SA
                case 398358: //Harben Vale Cherries - SA
                case 398360: //Marble Hill Cherries - SA
                case 398362: //Plummers Border Valley Orchards - SA
                case 398364: //Stella Creek Cherry Orchard - SA
                case 398378: //Old Coralinga - SA
                case 398378: //Verdun PYO Cherry Farm - SA
                case 408144: //Martin Hill Cherries - SA
                case 408454: //Lennane Orchards - SA
                case 408458: //Cherrytime Orchards - SA
                case 408462: //Fleurieu Cherries - SA
                case 408467: //Torrens Valley Orchards - SA
                case 408476: //Kenton Valley Cherries - SA
                case 408485: //Wotton’s Greenhill Cherries - SA
                case 408811: //Bandiera Cherries - SA
                case 408814: //Kerrie's Cherries - SA
                case 408121: //Ron and Cheryl Burke - SA
                    marker.setIcon(fruitIconsInfo["cheries"]);
                    break;
                case 391934: //Emily Hill Farm - VIC
                case 370298: //Avonsleigh Berries - VIC
                case 391372: //Folly Farm Blueberry - VIC
                case 391897: //The Big Berry - VIC
                case 391390: //Hillbilly Farm - VIC
                case 391923: //Summer Berries - VIC
                case 370339: //Buninyong Berries - VIC
                case 391888: //Otway Blueberries - VIC
                case 391348: //Tuckerberry Hill - VIC
                case 392715: //clyderiverberryfarm - NSW
                case 398889: //Blueberry Lakes - WA
                case 407507: //Hampton Blue Organic Blueberries - QLD
                    marker.setIcon(fruitIconsInfo["blueberries"]);
                    break;
                case 391930: //Fielderberry Farm - VIC
                case 371918: //All Berries Upick - VIC
                    marker.setIcon(fruitIconsInfo["blackberries"]);
                    break;
                case 371933: //Lomas Orchards - VIC
                case 398901: //Spring Valley Organic Orchard - WA
                    marker.setIcon(fruitIconsInfo["plums"]);
                    break;
                case 391385: //Sunny Ridge Strawberry Farm - VIC
                case 351504: //Upick Berries - VIC
                case 378583: //GatewayEstate Indoor Strawberry Upick - VIC
                case 391908: //Naturipe Fruits - VIC
                case 397838: //McMartins Strawberry Farm - QLD
                case 397851: //Rolin Farms - QLD
                case 397858: //Strawberry Fields Palmview - QLD
                case 398371: //Harvest the Fleurieu - SA
                case 398942: //Hillwood Berry Farm  - TAS
                case 398942: //Sorell Fruit Farm  - TAS
                case 399030: //Turners Beach Berry Patch  - TAS
                case 401931: //Ricardoes Tomatoes - NSW
                case 406153: //Chambers Flat strawberry farm - QLD
                case 406247: //Jarvis Fresh Strawberry Farm - QLD
                case 406318: //Gowinta Farms - QLD
                case 397911: //Beerenberg Farm - SA
                case 413117: //Bruny Island Berry Farm- TAS
                case 413272: //Pick Your Own Strawberry Farm - WA
                    marker.setIcon(fruitIconsInfo["strawberries"]);
                    break;
                case 381521: //RaynerOrchard Farms Upick - VIC
                case 407912: //Montacute Valley Orchards - SA
                    marker.setIcon(fruitIconsInfo["peaches"]);
                    break;
                case 391324: //Ruefleur Chestnuts
                case 393934: //Campanella Cottage - NSW
                case 393950: //Kookootonga Nut Farm - NSW
                case 394362: //Nutwood Farm - NSW
                case 398892: //Chestnut Brae - WA
                    marker.setIcon(fruitIconsInfo["chestnuts"]);
                    break;
                case 391338: //Sunny Creek Organic - VIC
                    marker.setIcon(fruitIconsInfo["gooseberries"]);
                    break;
                case 391344: //Paynes Orchard - VIC
                    marker.setIcon(fruitIconsInfo["apricots"]);
                    break;
                case 391404: //Water Wheel Orchard - VIC
                case 391374: //Bramble Farm - VIC
                case 391397: //Kinglake Raspberries - VIC
                case 391885: //Pennyroyal Raspberry Farm - VIC
                case 393819: //Huntley Berry Farm - VIC
                case 398900: //Denmark Berry Farm - WA
                case 411067: //Westerway Raspberry Farm - TAS
                    marker.setIcon(fruitIconsInfo["raspbeerries"]);
                    break;
                case 391869: //Yileen Berry Farm - VIC
                case 391881: //Herbert Hill Berry Farm - VIC
                    marker.setIcon(fruitIconsInfo["boysonberries"]);
                    break;
                case 392704: //Pine Crest Orchard - NSW
                case 392719: //Bilpin Fruit Bowl - NSW
                case 393810: //Bilpin Spring Orchard - NSW
                case 394371: //TNT Produce Pick Your Own Apples - NSW
                case 401888: //Appleshack at Glenbernie Orchard - NSW
                case 407549: //Sutton’s Farm - QLD
                case 408461: //Harrisville Orchards - SA
                case 408823: //Mahnew Orchard - SA
                case 413126: //Lucaston Park Orchards - TAS
                case 413298: //CORE Cider House - WA
                case 413587: //Valley Fresh Produce - WA
                case 413593: //The Fruit Corner - WA
                    marker.setIcon(fruitIconsInfo["apple"]);
                    break;
                case 393800: //Fords Farm - NSW
                case 394402: //Watkins Family Farm - NSW
                case 413579: //Golden Grove Orchard - WA
                    marker.setIcon(fruitIconsInfo["mandarine"]);
                    break;
                case 393801: //Montrose Berry Farm - NSW
                    marker.setIcon(fruitIconsInfo["loganberry"]);
                    break;
                case 394414: //The Real Christmas Tree Farm - NSW
                case 394422: //Dural Christmas Tree Farm - NSW
                case 394450: //Sydney Christmas Tree Farm - NSW
                case 394461: //Tomalong Christmas Tree Farm - NSW
                case 394471: //Willy's Christmas Tree Farm - NSW
                case 394479: //Kemps Creek Christmas Tree Farm - NSW
                case 394482: //Triple A Christmas Tree Farm - NSW
                    marker.setIcon(fruitIconsInfo["christmas_tree"]);
                    break;
                case 394433: //Canoelands orchard - NSW
                    marker.setIcon(fruitIconsInfo["nectarines"]);
                    break;
                case 394728: //Norland Fig Orchard - NSW
                case 408073: //Smith Gully Orchards - SA
                case 408819: //Willabrand Orchards - SA
                    marker.setIcon(fruitIconsInfo["figs"]);
                    break;
                case 397863: //The Longan Farm - QLD
                    marker.setIcon(fruitIconsInfo["longan"]);
                    break;
                case 401929: //Cedar Creek Orchard - NSW
                    marker.setIcon(fruitIconsInfo["persimmons"]);
                    break;
                case 394719: //TCP Farmgate Tours - NSW
                    marker.setIcon(fruitIconsInfo["fruits"]);
                    break;
                case 405182: //Hinterland Feijoas - QLD
                    marker.setIcon(fruitIconsInfo["feijoas"]);
                    break;
                case 406327: //Superbee Honeyworld - QLD
                case 406336: //Honey Bee Factory Outlet - NSW
                    marker.setIcon(fruitIconsInfo["honey"]);
                    break;
                case 406365: //Tropical Fruit World - QLD
                    marker.setIcon(fruitIconsInfo["tropicalFruits"]);
                    break;
                case 407183: //Currumbin Valley Harvest - QLD
                case 407617: //Permaculture Gold Coast - QLD
                    marker.setIcon(fruitIconsInfo["vegies"]);
                    break;
                case 413134: //Coal River Farm - TAS
                    marker.setIcon(fruitIconsInfo["chocolate"]);
                    break;
                case 413224: //Perth Mango Farm - WA
                    marker.setIcon(fruitIconsInfo["mango"]);
                    break;
                default:
                    marker.setIcon(fruitIconsInfo["fruits"]);
            }
        }
    }

    //Replace default marker with fruit icon in google map in home page when apply fruit filter
    setFruitIconInMapForFilter('checkbox_filter_option_147322', fruitIconsInfo["cheries"]);
    setFruitIconInMapForFilter('checkbox_filter_option_147458', fruitIconsInfo["sourcherries"]);
    setFruitIconInMapForFilter('checkbox_filter_option_147324', fruitIconsInfo["blueberries"]);
    setFruitIconInMapForFilter('checkbox_filter_option_160213', fruitIconsInfo["raspbeerries"]);
    setFruitIconInMapForFilter('checkbox_filter_option_147323', fruitIconsInfo["strawberries"]);
    setFruitIconInMapForFilter('checkbox_filter_option_160212', fruitIconsInfo["blackberries"]);
    setFruitIconInMapForFilter('checkbox_filter_option_147325', fruitIconsInfo["apple"]);
    setFruitIconInMapForFilter('checkbox_filter_option_147326', fruitIconsInfo["kiwifruit"]);
    setFruitIconInMapForFilter('checkbox_filter_option_160215', fruitIconsInfo["bayberries"]);
    setFruitIconInMapForFilter('checkbox_filter_option_160216', fruitIconsInfo["apricots"]);
    setFruitIconInMapForFilter('checkbox_filter_option_160217', fruitIconsInfo["boysonberries"]);
    setFruitIconInMapForFilter('checkbox_filter_option_160218', fruitIconsInfo["figs"]);
    setFruitIconInMapForFilter('checkbox_filter_option_160219', fruitIconsInfo["plums"]);
    setFruitIconInMapForFilter('checkbox_filter_option_160220', fruitIconsInfo["peaches"]);
    setFruitIconInMapForFilter('checkbox_filter_option_160221', fruitIconsInfo["nectarines"]);
    setFruitIconInMapForFilter('checkbox_filter_option_179759', fruitIconsInfo["chestnuts"]);
    setFruitIconInMapForFilter('checkbox_filter_option_160222', fruitIconsInfo["quinces"]);
    setFruitIconInMapForFilter('checkbox_filter_option_160214', fruitIconsInfo["vegies"]);
    setFruitIconInMapForFilter('checkbox_filter_option_180103', fruitIconsInfo["christmas_tree"]);
    setFruitIconInMapForFilter('checkbox_filter_option_180107', fruitIconsInfo["pear"]);
    setFruitIconInMapForFilter('checkbox_filter_option_180105', fruitIconsInfo["longan"]);
    setFruitIconInMapForFilter('checkbox_filter_option_180108', fruitIconsInfo["youngberry"]);
    setFruitIconInMapForFilter('checkbox_filter_option_180104', fruitIconsInfo["loganberry"]);
    setFruitIconInMapForFilter('checkbox_filter_option_180106', fruitIconsInfo["marionberry"]);
    setFruitIconInMapForFilter('checkbox_filter_option_180777', fruitIconsInfo["mandarine"]);
    setFruitIconInMapForFilter('checkbox_filter_option_180953', fruitIconsInfo["walnuts"]);
    setFruitIconInMapForFilter('checkbox_filter_option_181377', fruitIconsInfo["tomatos"]);
    setFruitIconInMapForFilter('checkbox_filter_option_181376', fruitIconsInfo["honey"]);
    setFruitIconInMapForFilter('checkbox_filter_option_183059', fruitIconsInfo["grapes"]);
    setFruitIconInMapForFilter('checkbox_filter_option_185165', fruitIconsInfo["persimmons"]);
    setFruitIconInMapForFilter('checkbox_filter_option_186572', fruitIconsInfo["feijoas"]);
    setFruitIconInMapForFilter('checkbox_filter_option_187241', fruitIconsInfo["tropicalFruits"]);
    setFruitIconInMapForFilter('checkbox_filter_option_192357', fruitIconsInfo["chocolate"]);
    setFruitIconInMapForFilter('checkbox_filter_option_192476', fruitIconsInfo["mango"]);
    setFruitIconInMapForFilter('checkbox_filter_option_192604', fruitIconsInfo["oranges"]);

    //Add fruit icon in the front of the text in fruit filter
    if($('#checkbox_filter_option_147322').length) {
        $('#checkbox_filter_option_147322').after(getFruitIconHtmlForFilter(fruitIconsInfo['cheries']));
    }
    if($('#checkbox_filter_option_147458').length) {
        $('#checkbox_filter_option_147458').after(getFruitIconHtmlForFilter(fruitIconsInfo['sourcherries']));
    }
    if($('#checkbox_filter_option_147324').length) {
        $('#checkbox_filter_option_147324').after(getFruitIconHtmlForFilter(fruitIconsInfo['blueberries']));
    }
    if($('#checkbox_filter_option_160213').length) {
        $('#checkbox_filter_option_160213').after(getFruitIconHtmlForFilter(fruitIconsInfo['raspbeerries']));
    }
    if($('#checkbox_filter_option_147323').length) {
        $('#checkbox_filter_option_147323').after(getFruitIconHtmlForFilter(fruitIconsInfo['strawberries']));
    }
    if($('#checkbox_filter_option_160212').length) {
        $('#checkbox_filter_option_160212').after(getFruitIconHtmlForFilter(fruitIconsInfo['blackberries']));
    }
    if($('#checkbox_filter_option_147325').length) {
        $('#checkbox_filter_option_147325').after(getFruitIconHtmlForFilter(fruitIconsInfo['apple']));
    }
    if($('#checkbox_filter_option_147326').length) {
        $('#checkbox_filter_option_147326').after(getFruitIconHtmlForFilter(fruitIconsInfo['kiwifruit']));
    }
    if($('#checkbox_filter_option_160215').length) {
        $('#checkbox_filter_option_160215').after(getFruitIconHtmlForFilter(fruitIconsInfo['bayberries']));
    }
    if($('#checkbox_filter_option_160216').length) {
        $('#checkbox_filter_option_160216').after(getFruitIconHtmlForFilter(fruitIconsInfo['apricots']));
    }
    if($('#checkbox_filter_option_160217').length) {
        $('#checkbox_filter_option_160217').after(getFruitIconHtmlForFilter(fruitIconsInfo['boysonberries']));
    }
    if($('#checkbox_filter_option_160218').length) {
        $('#checkbox_filter_option_160218').after(getFruitIconHtmlForFilter(fruitIconsInfo['figs']));
    }
    if($('#checkbox_filter_option_160219').length) {
        $('#checkbox_filter_option_160219').after(getFruitIconHtmlForFilter(fruitIconsInfo['plums']));
    }
    if($('#checkbox_filter_option_160220').length) {
        $('#checkbox_filter_option_160220').after(getFruitIconHtmlForFilter(fruitIconsInfo['peaches']));
    }
    if($('#checkbox_filter_option_160221').length) {
        $('#checkbox_filter_option_160221').after(getFruitIconHtmlForFilter(fruitIconsInfo['nectarines']));
    }
    if($('#checkbox_filter_option_179759').length) {
        $('#checkbox_filter_option_179759').after(getFruitIconHtmlForFilter(fruitIconsInfo['chestnuts']));
    }
    if($('#checkbox_filter_option_160222').length) {
        $('#checkbox_filter_option_160222').after(getFruitIconHtmlForFilter(fruitIconsInfo['quinces']));
    }
    if($('#checkbox_filter_option_160214').length) {
        $('#checkbox_filter_option_160214').after(getFruitIconHtmlForFilter(fruitIconsInfo['vegies']));
    }
    if($('#checkbox_filter_option_180103').length) {
        $('#checkbox_filter_option_180103').after(getFruitIconHtmlForFilter(fruitIconsInfo['christmas_tree']));
    }
    if($('#checkbox_filter_option_180107').length) {
        $('#checkbox_filter_option_180107').after(getFruitIconHtmlForFilter(fruitIconsInfo['pear']));
    }
    if($('#checkbox_filter_option_180105').length) {
        $('#checkbox_filter_option_180105').after(getFruitIconHtmlForFilter(fruitIconsInfo['longan']));
    }
    if($('#checkbox_filter_option_180108').length) {
        $('#checkbox_filter_option_180108').after(getFruitIconHtmlForFilter(fruitIconsInfo['youngberry']));
    }
    if($('#checkbox_filter_option_180104').length) {
        $('#checkbox_filter_option_180104').after(getFruitIconHtmlForFilter(fruitIconsInfo['loganberry']));
    }
    if($('#checkbox_filter_option_180106').length) {
        $('#checkbox_filter_option_180106').after(getFruitIconHtmlForFilter(fruitIconsInfo['marionberry']));
    }
    if($('#checkbox_filter_option_180777').length) {
        $('#checkbox_filter_option_180777').after(getFruitIconHtmlForFilter(fruitIconsInfo['mandarine']));
    }
    if($('#checkbox_filter_option_180953').length) {
        $('#checkbox_filter_option_180953').after(getFruitIconHtmlForFilter(fruitIconsInfo['walnuts']));
    }
    if($('#checkbox_filter_option_181377').length) {
        $('#checkbox_filter_option_181377').after(getFruitIconHtmlForFilter(fruitIconsInfo['tomatos']));
    }
    if($('#checkbox_filter_option_181376').length) {
        $('#checkbox_filter_option_181376').after(getFruitIconHtmlForFilter(fruitIconsInfo['honey']));
    }
    if($('#checkbox_filter_option_183059').length) {
        $('#checkbox_filter_option_183059').after(getFruitIconHtmlForFilter(fruitIconsInfo['grapes']));
    }
    if($('#checkbox_filter_option_185165').length) {
        $('#checkbox_filter_option_185165').after(getFruitIconHtmlForFilter(fruitIconsInfo['persimmons']));
    }
    if($('#checkbox_filter_option_186572').length) {
        $('#checkbox_filter_option_186572').after(getFruitIconHtmlForFilter(fruitIconsInfo['feijoas']));
    }
    if($('#checkbox_filter_option_187241').length) {
        $('#checkbox_filter_option_187241').after(getFruitIconHtmlForFilter(fruitIconsInfo['tropicalFruits']));
    }
    if($('#checkbox_filter_option_192357').length) {
        $('#checkbox_filter_option_192357').after(getFruitIconHtmlForFilter(fruitIconsInfo['chocolate']));
    }
    if($('#checkbox_filter_option_192476').length) {
        $('#checkbox_filter_option_192476').after(getFruitIconHtmlForFilter(fruitIconsInfo['mango']));
    }
    if($('#checkbox_filter_option_192604').length) {
        $('#checkbox_filter_option_192604').after(getFruitIconHtmlForFilter(fruitIconsInfo['oranges']));
    }

    if($(".custom-filter-options").length) {
        //Add in season section
        var inSeasonHtml = "<div><img width='110px' src='https://raw.githubusercontent.com/UPICKO/external_files/master/images/in_season.png'/></div><div id='inSeasonFilters' style='margin-bottom: 10px; margin-left: 20px;'></div>";
        $(".custom-filter-options").before(inSeasonHtml);
        $(".custom-filter-options").find(".custom-filter-checkbox-container").each(function (index) {
            var fruit = $.trim($(this).find(".custom-filter-checkbox-label-text").html());
            if(jQuery.inArray(fruit, inSeasonFruits) != -1) {
                var element = $(this).detach();
                $("#inSeasonFilters").append(element);
            }
        });
        $('input:checkbox').show();

        //Customize the checkbox style
        $.getScript( "https://cdn.rawgit.com/UPICKO/external_files/master/js/icheck.js", function( data, textStatus, jqxhr ) {
            //Add state checkbox in main page
            var stateCheckboxHtml =
                "<span id='stateCheckboxContainer' class='floatLeft' style='padding-top: 0.5em;'>" +
                "   <span style='padding-right: 5px;'><b>STATE: </b></span>" +
                "   <input type='checkbox' value='NSW'/> NSW " +
                "   <input type='checkbox' value='VIC'/> VIC " +
                "   <input type='checkbox' value='QLD'/> QLD " +
                "   <input type='checkbox' value='SA'/> SA " +
                "   <input type='checkbox' value='TAS'/> TAS " +
                "   <input type='checkbox' value='WA'/> WA " +
                "   <input type='checkbox' value='NT'/> NT " +
                "</span>";
            $(".home-toolbar-button-group").after(stateCheckboxHtml);
            var q = getUrlParameter("q");
            if(q) {
                $('#stateCheckboxContainer input[type=\"checkbox\"]').each(function (index) {
                    if($(this).val() == q) {
                        $(this).prop("checked",true);
                    }
                });
            }

            //Add category checkbox in main page
            var stateCheckboxHtml =
                "<span id='categoryCheckboxContainer' class='floatLeft' style='margin-left: 1em; padding-top: 0.5em;'>" +
                "   <span style='padding-right: 5px;'><b>Category: </b></span>" +
                "   <input type='checkbox' value='u-pick-access'/> U-Pick Access " +
                "   <input type='checkbox' value='food-selling-online'/> Food Selling Online " +
                "   <input type='checkbox' value='shed-Door-sale'/> Shed Door Sale " +
                "</span>";
            $("#stateCheckboxContainer").after(stateCheckboxHtml);
            var category = getUrlParameter("category");
            if(category) {
                $('#categoryCheckboxContainer input[type=\"checkbox\"]').each(function (index) {
                    if($(this).val() == category) {
                        $(this).prop("checked",true);
                    }
                });
            }

            $('input:checkbox').iCheck({
                checkboxClass: 'icheckbox_square-orange',
                radioClass: 'icheckbox_square-orange'
            });
            $('input:checkbox').show();

            //Make the state checkbox like radio action
            if($("#stateCheckboxContainer").length && $("#stateCheckboxContainer .iCheck-helper").length) {
                $("#stateCheckboxContainer .iCheck-helper").on("click", function() {
                    var checkedCheckboxContainer = $("#stateCheckboxContainer").find('.icheckbox_square-orange.checked').find('.iCheck-helper').not(this).parent();
                    checkedCheckboxContainer.removeClass('checked');
                    checkedCheckboxContainer.find(':checkbox').prop("checked",false);
                    var checkbox = $(this).parent().find('input[type=\"checkbox\"]');
                    var state = "";
                    if(checkbox.prop("checked"))
                        state = checkbox.val();
                    clickStateCheckbox(state);
                });
            }

            //Make the category checkbox like radio action
            if($("#categoryCheckboxContainer").length && $("#categoryCheckboxContainer .iCheck-helper").length) {
                $("#categoryCheckboxContainer .iCheck-helper").on("click", function() {
                    var checkedCheckboxContainer = $("#categoryCheckboxContainer").find('.icheckbox_square-orange.checked').find('.iCheck-helper').not(this).parent();
                    checkedCheckboxContainer.removeClass('checked');
                    checkedCheckboxContainer.find(':checkbox').prop("checked",false);
                    var checkbox = $(this).parent().find('input[type=\"checkbox\"]');
                    var category = "";
                    if(checkbox.prop("checked"))
                        category = checkbox.val();
                    clickCategoryCheckbox(category);
                });
            }

            //Make the fruit filter checkbox like radio action in home page
            if($("#filters").length && $("#filters").find('.iCheck-helper').length) {
                $("#filters").find('.iCheck-helper').on("click", function() {
                    var checkedCheckboxContainer = $("#filters").find('.icheckbox_square-orange.checked').find('.iCheck-helper').not(this).parent();
                    checkedCheckboxContainer.removeClass('checked');
                    checkedCheckboxContainer.find(':checkbox').prop("checked",false);
                    //Click the "update view" button
                    $("#desktop-filters #filters button").click();
                });

                $("#filters").find('.custom-filter-checkbox-label-text').on("click", function() {
                    $(this).parent().find('.icheckbox_square-orange ins').click();
                    return false;
                });
                $("#filters").find('img').on("click", function() {
                    $(this).parent().find('.icheckbox_square-orange ins').click();
                    return false;
                });
            }
        });

        // Refresh Page and Keep Scroll Position in map page
        $(window).scroll(function() {
            sessionStorage.scrollTop = $(this).scrollTop();
        });
        $(document).ready(function() {
            if (sessionStorage.scrollTop != "undefined") {
                $(window).scrollTop(sessionStorage.scrollTop);
            }
        });
    }
});

$(window).on('load', function () {
    if($("#upicko_landing_page").length)
        $("#upicko_landing_page").show();
    if($("#spinner_landing_page").length)
        $("#spinner_landing_page").remove();
});

// Move search bar function
function processMoveSearchBar() {
    if($(window).width() >= 1270) {
        var element = $(".SearchBar__root__2hIPj").detach();
        element.addClass("floatLeft");
        $("#bannerDesc").after(element);
    } else {
        var element = $(".SearchBar__root__2hIPj").detach();
        element.removeClass("floatLeft");
        $(".Topbar__topbarMenuSpacer__3hqBi").before(element);
    }
}

function getBannerHtml() {
    var randomInt = Math.floor((Math.random() * featureFarmsInfo.length));
    return "" +
        "<table class='bannerTable' style='background-image: url("+featureFarmsInfo[randomInt].imageUrl+");'>" +
        "	<tr>" +
        "		<td width='34%' style='text-valign: middle; padding-left: 20px'>" +
        "			<h1 id='bannerDesc'>" +
        "				Find nearby pick-your-own farms" +
        "				<br/>" +
        "				Buy your access pass online" +
        "			</h1>" +
        "		</td>" +
        "		<td width='66%'>" +
        "			<a href='"+featureFarmsInfo[randomInt].hrefUrl+"'>" +
        "				<div style='width: 100%; height: 100px' ></div>" +
        "			</a>" +
        "		</td>" +
        "	</tr>" +
        "</table>";
}

function getFruitIconHtmlForFilter(url) {
    return '<img src="'+url+'" width="20px" style="vertical-align: middle; margin-left: 4px;"/>';
}

function setFruitIconInMapForFilter(filterTextInUrl, fruitIconUrl) {
    if(window.location.href.indexOf(filterTextInUrl) !== -1) {
        if($(".home-toolbar").length && markers && markers.length >= 1) {
            for(i=markers.length - 1; i>=0; i--) {
                markers[i].setIcon(fruitIconUrl);
            }
        }
    }
}

function clickStateCheckbox(state) {
    var url = window.location.href;
    var stateInUrl = getUrlParameter("q");
    if(state) {
        if(stateInUrl)
            url = url.replace(stateInUrl, state);
        else
            url = url + "&q=" + state;
    } else {
        if(stateInUrl)
            url = url.replace("q=" + stateInUrl, "");
    }
    window.location = url;
}

function clickCategoryCheckbox(category) {
    var url = window.location.href;
    var categoryInUrl = getUrlParameter("category");
    if(category) {
        if(categoryInUrl)
            url = url.replace(categoryInUrl, category);
        else
            url = url + "&category=" + category;
    } else {
        if(categoryInUrl)
            url = url.replace("category=" + categoryInUrl, "");
    }
    window.location = url;
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

String.prototype.replaceAll = function(search, replace)
{
    //if replace is not sent, return original string otherwise it will
    //replace search string with 'undefined'.
    if (replace === undefined) {
        return this.toString();
    }

    return this.replace(new RegExp('[' + search + ']', 'g'), replace);
};

function checkTemplateLiteralSupported() {
    try {
        eval("tt=``;");
        return true;
    } catch (e) {
        return false;
    }
}

function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}
