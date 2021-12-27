/**
 * 注册功能模块
 */
$(function() {
    //调用验证插件
    $("#registerForm").validate({
        //验证规则
        rules: {
            username: {
                //用户名的验证 
                required: true, //非空
                rangelength: [3, 6] //长度验证
            },
            password: {
                //密码的验证 
                required: true, //非空
                isPassword: true, //自定义的密码验证
            },
            repassword: {
                required: true,
                isPassword: true, //自定义的密码验证,
                equalTo: "[name='password']" //验证密码一致性
            },
            tel: {
                required: true,
                isTel: true
            },
            code: {
                required: true
            }
        },
        //提示信息
        messages: {
            //用户名提示信息
            username: {
                required: "用户名不能为空哦！", //非空提示
                rangelength: "长度需要在3 ~ 6位之间哦！" //长度提示
            },
            //密码提示信息
            password: {
                required: "密码不能为空哦！", //非空提示
                isPassword: "请输入5-10位,以字母或数字开头,可带“_”、“.”的字符串" //密码格式提示
            },
            repassword: {
                required: "确认密码不能为空哦！", //非空提示
                isPassword: "请输入5-10位,以字母或数字开头,可带“_”、“.”的字符串", //密码格式提示
                equalTo: "两次密码不一致!" //密码一致性提示
            },
            tel: {
                required: "电话号码不能为空哦！", //非空提示
                isTel: "电话号码格式不正确！" //电话号码格式提示
            },
            code: {
                required: "验证码不能为空哦！", //非空提示
            }

        }
    });

    //密码自定义验证
    jQuery.validator.addMethod("isPassword", function(value, element) {
        var pwdReg = /^([a-zA-Z]|[0-9]){1}([a-zA-Z0-9]|[._]){4,9}$/;
        return this.optional(element) || (pwdReg.test(value));
    });
    //手机号自定义验证
    jQuery.validator.addMethod("isTel", function(value, element) {
        var telReg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
        return this.optional(element) || (telReg.test(value));
    });
});