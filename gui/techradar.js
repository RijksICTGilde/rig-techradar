function test() {
    $("#robbert").html("Dit is een test");

    var technologies = [];

    $.get("/technologies.json", function (data) {
        console.log(data);
        var promises = [];
        for (fileName of data["files"]) {
            var request = $.get("/technologies/" + fileName, function (mdData) {
// ?                console.log(mdData);
                // $("#robbert").html(marked.parse(mdData));

                const regex = /```(.*?)```/gs;
                const matches = [...mdData.matchAll(regex)];
                // console.log("Matches: ");
                // console.log(matches[0][1]);
                // console.log("Codeblock");
                const codeBlocks = "{" + matches[0][1].trim() + "}";
                try {
                    var myJSONBlock = $.parseJSON(codeBlocks);
                    technologies.push(myJSONBlock);
                    //console.log(myJSONBlock);
                } catch (e) {
                    console.error(codeBlocks);
                    console.error(e);
                }
            })
            promises.push(request)
        }
        $.when.apply(null, promises).done(function(){
            console.log(technologies.length);
            drawRadar(technologies);
        })
    });
}

$(function () {
    console.log("ready please no cache!");
    test();
});

