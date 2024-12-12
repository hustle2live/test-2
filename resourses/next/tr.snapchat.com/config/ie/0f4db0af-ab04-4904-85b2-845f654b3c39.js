! function() {
    "use strict";
    try {
        window.snaptr.cfg('0f4db0af-ab04-4904-85b2-845f654b3c39', {
            "asc": [{
                "watch_el": "div.cist-modal-dialog div.cist-col-6 a[data-accessibility]",
                "ev": "click",
                "val_el": [
                    ["div.cist-modal-dialog div.cist-col-6 input.cist-location-input", "l_z"]
                ]
            }, {
                "watch_el": "div#registerArea form.form-horizontal div.form-group button[data-ga-label='int_sign_up_one_page_reg_button']",
                "ev": "click",
                "val_el": [
                    ["div#registerArea div.container div.form-group div.input-group.input-container input[data-ga='FirstName']", "u_fn"],
                    ["div#registerArea div.container div.form-group div.input-group.input-container input[data-ga='FirstName']", "u_ln"],
                    ["div#registerArea div.container div.form-group div.input-group.input-container input[data-ga='Email']", "u_ems"],
                    ["div#registerArea div.container div.form-group div.input-group.input-container input[data-lookup-field='City']", "l_c"],
                    ["div#registerArea div.container div.form-group div.input-group.input-container input[data-lookup-field='PostalCode']", "l_z"],
                    ["div#registerArea div.container div.form-group div.input-group.input-container input[data-lookup-field='Province']", "l_s"]
                ]
            }],
            "gw": null,
            "a": ["PII", "AV3"],
            "ipg": "380",
            "b": ["ERR"],
            "t": "353",
            "v": "3.7.5-2401032347",
            "tpd": [],
            "ec": []
        })
    } catch (e) {}
}();