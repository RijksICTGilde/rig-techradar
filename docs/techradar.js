import * as yaml from "https://cdn.skypack.dev/js-yaml";

var md;
window.onload = function () {
    md = window.markdownit();
}

function drawDependencyFlow(technologies) {
    var relations = [];
    for (let technology of technologies) {
        // console.log(technology);
        relations[technology["json"]["fileName"]] = technology["json"];
    }
    $('.workflow').empty();
    $('.workflow').workflowChart({
        data: [
            {id: 1, title: 'Java (v21)', parent: null, optional: false},
            {id: 2, title: 'Maven (3)', parent: 1, optional: false},
            {id: 3, title: 'Jenkins', parent: 2, optional: true, link: 'http://www.google.com'},
            {id: 4, title: 'GitLab', parent: 2, optional: true, link: 'http://www.google.com'},
            {id: 5, title: 'GitHub', parent: 2, optional: true, link: 'http://www.google.com'},
            {id: 6, title: 'Storage', parent: 5, optional: false, link: 'http://www.google.com'},
            {id: 7, title: 'Artifact Storage', parent: 6, optional: false, link: 'http://www.google.com'},
            {id: 8, title: 'Image Storage', parent: 6, optional: false, link: 'http://www.google.com'},
            {id: 9, title: 'Kubernetes Deploymnent', parent: 7, optional: false, link: 'http://www.google.com'}
        ]
    })
}

function getPathPrefix() {
    let pathPrefix = "";
    let urlPaths = location.pathname.split('/');
    if (urlPaths.length >= 1 && urlPaths[1] === "rig-techradar") {
        pathPrefix = "/rig-techradar/"
    }
    return pathPrefix;
}

function test() {
    $("#robbert").html("Dit is een test");

    $("#markdown-container").on("click", function (e) {
        jQuery(this).hide();
    })

    var technologies = [];


    let pathPrefix = getPathPrefix();

    // https://stackoverflow.com/questions/939032/jquery-pass-more-parameters-into-callback
    $.get(pathPrefix + "/technologies.txt", function (data) {
        var promises = [];
        var lines = data.split("\n").filter(function (el) {
            return el != null && el !== "";
        });
        for (var fileName of lines) {
            var request = $.get({
                url: getPathPrefix() + "/technologies/" + fileName,
                type: "GET",
                fileName: fileName,
                complete: function (jqXHR,status) {
                    let mdData = jqXHR.responseText;
                    try {
                        let regex = /```(.*?)```/gs;
                        let matches = [...mdData.matchAll(regex)];
                        let codeBlocks = matches[0][1].trim();
                        let myJSONBlock = yaml.load(codeBlocks);
                        myJSONBlock["fileName"] = this.fileName;
                        technologies.push({"json": myJSONBlock, "html": md.render(mdData)});
                    } catch (e) {
                        console.error(mdData);
                        console.error(e);
                    }
                }
            });
            promises.push(request)
        }
        $.when.apply(null, promises).done(function () {
            drawRadar(technologies);
            drawDependencyFlow(technologies);
        })
    });
}

$(function () {
    test();
});

