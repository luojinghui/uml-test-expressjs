document.querySelector("#submit").addEventListener("click",function(event) {
    window.scroll(0,0);
    // event.preventDefault();
    judgeInfo("banji","xuehao","xingming");
    document.getElementById("sub_score").value = sub_score();
});

function sub_score() {
    var form = new FormValueGetter();
    var score = 0;

    form.GetValues("form");
    var NamesAndValues = form.NamesAndValues;

    NamesAndValues.forEach(function(val) {
        score += calculate(val.name,val.value);
    })
    return score;
}

function calculate(valName,valValue) {
    var answer = Answer();
    var getSubScore = 0;

    answer.forEach(function(val) {
        if(val.name === valName && judgeValue(val,valName,valValue)) {
            getSubScore = val.score;
        }
    })
    return getSubScore;
}
// val.value.toString() === valValue.toString()

function judgeValue(val,valName,valValue) {
    var answer = Answer();
    var array = [];

        if(val.value.length === valValue.length) {
            _.forEach(val.value,function(n) {
                _.forEach(valValue,function(m) {
                    if(n === m) {
                        array.push(n);
                    }
                });
            });
        }
        if(val.value.length === array.length) {
            return true;
        } else {
            return false;
        }
}

function judgeInfo(banji,xuehao,xingming) {
    if(document.getElementById(banji).value === "") {
        alert("班级不能为空");
        event.preventDefault();
    } else if(document.getElementById(xuehao).value === "") {
        alert("学号不能为空");
        event.preventDefault();
    } else if(document.getElementById(xingming).value === "") {
        alert("姓名不能为空");
        event.preventDefault();
    }
}

var addAloneSelectListener = function(name){
    _.forEach(document.getElementsByName(name), function(val) {
        val.addEventListener("click", function() {
            // console.log(name);
            document.getElementById(name).innerHTML = val.value;
        });
    });
}


var addListenerSelects = function(name) {
    _.forEach(document.getElementsByName(name), function(element) {
        element.addEventListener("click", function() {
            var inner = document.getElementById(name).innerHTML;
            var index = inner.indexOf(element.value);
            var result = ""
            if(index === -1){
                result = inner + element.value;
            }else {
                _.forEach(inner, function(n, i) {
                    if(i !== index) {
                        result += n;
                    }
                });
            }
            document.getElementById(name).innerHTML = result;
        });
    });
}

var listener = function() {
    addAloneSelectListener("one_select_1");
    addAloneSelectListener("one_select");
    addListenerSelects("check_box1");
    addListenerSelects("check_box2");
}
listener();
