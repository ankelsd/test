function showLoader() {
    $(".lds-css").fadeIn();
}

function hideLoader() {
    $(".lds-css").fadeOut();
}


// $( document ).ready(function() {
//   $('.close').on("click", function() {
//         $(".btn").focusout();
//     });
// });

$(document).ready(function() {
    // $('.cancel-btn-cust').click(function(){
    //     $( "body" ).trigger( "click" );
    //   });

    setTimeout(function() {
        $('.alert').fadeOut();
    }, 3000);
    $(".deleterowbutton").click(function() {
        var links = $(this).attr('data-href');
        $("#deletemodelhref").attr('href', links);

    });
	$(".deleterowbutton2").click(function() {
        var links = $(this).attr('data-href');
        $("#deletemodelhref2").attr('href', links);

    });
});

// Alpha numeric with space, dash
$.validator.addMethod("alphanumericwithspace", function(value, element) {
    return this.optional(element) || /^[a-z0-9\-\s]+$/i.test(value);
}, "Contain only letters, numbers,space or dashes.");
//Valid email
$.validator.addMethod("emailvalid", function(value, element) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(value)) {
        return false;
    } else {
        return true;
    }
}, "Invalid Email");


//Valid Password
$.validator.addMethod("passwordvalid", function(value, element) {
    var regex = /^(?=.*\d)(?=.*[a-z]).{6,}$/;
    if (!regex.test(value)) {
        return false;
    } else {
        return true;
    }
}, "Password must contain alphanumeric");

//Only alphabet and space and special character
$.validator.addMethod("alphaspacespecialvalid", function(value, element) {
    var regex = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    if (!regex.test(value)) {
        return false;
    } else {
        return true;
    }
}, "only alphabet and space is allowed");

//Only alphabet and space
$.validator.addMethod("alphaspacevalid", function(value, element) {
    var regex = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    if (!regex.test(value)) {
        return false;
    } else {
        return true;
    }
}, "only alphabet and space is allowed");
//alphanumeric without space
$.validator.addMethod("alphanumericnotspacevalid", function(value, element) {
    //var regex = /^[a-zA-Z-,]+([0-9-,])*$/;
    var regex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    if (!regex.test(value)) {
        return false;
    } else {
        return true;
    }
}, "only alphabet, numbers allowed");


//alphabet and number allowed with space first alpha slash
$.validator.addMethod("alphanumericspaceslash", function(value, element) {
    var regex = /^([A-Z0-9-,\s/])*$/;
    if (!regex.test(value)) {
        return false;
    } else {
        return true;
    }
    //  }, "only alphanumeric, space allowed");
}, "only alphanumeric allowed");

//multiple array branch validation
$.validator.addMethod('atLeastOneBranch', function(value, element, params) {
    var seats = $('.branchselectf').filter(function() {
        return $(this).val() != '0';
    });
    return seats.length > 0;
}, 'Please select at least one Branch');


//Phone check for all zero

jQuery.validator.addMethod("phonecheckforzeros", function(value, element) {
    var zerocnt = 0;
    var numericcnt = 0;
    for (var i = 0; i < value.length; i++) {
        if (value.charAt(i) == '0') {
            zerocnt++;
        }
        if ($.isNumeric(value.charAt(i))) {
            numericcnt++;
        }

    }

    if (numericcnt == zerocnt) {
        return false;
    } else {
        return true;
    }

}, "Please enter valid Contact Number");

//phone check number and + - only
jQuery.validator.addMethod("phonecheck", function(value, element) {
    var regex = /^[0-9-+()]*$/;
    var alpha = /[a-zA-Z]/;
    if (regex.test(value)) {
        return true;
    } else {
        return false;
    }
}, "Please enter valid Contact Number");

jQuery.validator.addMethod("imagefilesize", function(value, element) {

    var fi = document.getElementById('imagesizecheck');
    // Check if any file is selected.
    if (fi.files.length > 0) {
        for (var i = 0; i <= fi.files.length - 1; i++) {

            var fsize = fi.files.item(i).size;
            var file = Math.round((fsize / 1024));
            // The size of the file.
            if (fsize > 1000000) {
                return false
            } else {
                return true;
            }
        }
    } else {
        return true;
    }


}, "Image size must be less than 1Mb");


//Phone check for all zero for farmer only

jQuery.validator.addMethod("phonecheckforzerosforfarmer", function(value, element) {
    if (value != '') {
        var zerocnt = 0;
        var numericcnt = 0;
        for (var i = 0; i < value.length; i++) {
            if (value.charAt(i) == '0') {
                zerocnt++;
            }
            if ($.isNumeric(value.charAt(i))) {
                numericcnt++;
            }

        }

        if (numericcnt == zerocnt) {
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }

}, "Please enter valid Contact Number");

//Valid email for farmer
$.validator.addMethod("emailvalidforfarmer", function(value, element) {
    if (value != '') {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(value)) {
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
}, "Invalid Email");
//for farmernamevalidateion alphanumeric with space
$.validator.addMethod("alphanumericfarmername", function(value, element) {
    var regex = /^[a-zA-Z-,]+([A-Z0-9-,'\s/])*$/;
    if (!regex.test(value)) {
        return false;
    } else {
        return true;
    }
}, "only alphanumeric, space  allowed");


//for comma seperated emails
$.validator.addMethod("commaseperatedemails", function(value, element) {
    var emails = value.replace(/\s/g, '').split(",");
    var valid = true;
    if (value != "") {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        for (var i = 0; i < emails.length; i++) {
            if (emails[i] == "" || !regex.test(emails[i])) {
                valid = false;
            }
        }
    }
    return valid;
}, "Please add valid emails as comma seperated");

//for decimal value validation
$.validator.addMethod("decnumber", function(value, element) {
    return this.optional(element) || /^[1-9]\d*(\.\d+)?$/.test(value);
}, "Please enter valid number");

$.validator.addMethod("onlyspecialcheck", function(value, element) {
    var regex = /^[^a-zA-Z0-9]+$/;
    if (!regex.test(value)) {
        return true;
    } else {
        return false;
    }
}, "Only special characters not allowed");

$.validator.addMethod("onlynumbercheck", function(value, element) {
    var regex = /^\d+$/;
    if (!regex.test(value)) {
        return true;
    } else {
        return false;
    }
}, "Only numbers not allowed");

$.validator.addMethod("portsacheck", function(value, element) {
    var originport = $('[name=origin_port_id]').val();
    var destport = $('[name=destination_port_id]').val();
    if (originport == destport) {
        return false;
    } else {
        return true;
    }
}, "Origin Port and Destination Port must be different");

$.validator.addMethod("commaseparatednumber", function(value, element) {
    var regex = /^(?:\s*\d{4}\s*(?:,|$))+$/;
    if (regex.test(value)) {
        return true;
    } else {
        return false;
    }
}, "Please add 4 digit number with comma separated");

$.validator.addMethod("certdecnumber", function(value, element) {
    var regex = /^\d+$/;
    if (regex.test(value)) {
        return true;
    } else {
        return false;
    }
}, "Only numeric numbers allowed");