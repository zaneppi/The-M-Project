// ==========================================================================
// Project:   The M-Project - Mobile HTML5 Application Framework
// Copyright: (c) 2010 M-Way Solutions GmbH. All rights reserved.
// Creator:   Sebastian
// Date:      22.11.2010
// License:   Dual licensed under the MIT or GPL Version 2 licenses.
//            http://github.com/mwaylabs/The-M-Project/blob/master/MIT-LICENSE
//            http://github.com/mwaylabs/The-M-Project/blob/master/GPL-LICENSE
// ==========================================================================

m_require('core/datastore/validator.js')

M.EmailValidator = M.Validator.extend({

    pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,

    validate: function(obj) {
        if (this.pattern.exec(obj.value)) {
            return YES;
        }
        M.Validator.validationErrors.push({
            msg: obj.msg,
            modelId: obj.modelId,
            property: obj.property,
            viewId: obj.viewId,
            validator: 'EMAIL',
            onSuccess: obj.onSuccess,
            onError: obj.onError
        });
        return NO;
    }
    
});