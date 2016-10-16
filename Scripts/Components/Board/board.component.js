angular.module("baseModule")
    .component("board", {
        templateUrl: "Scripts/Components/Board/Board.html",
        controller: function () {
            var scope = this;
            var component = {};
            console.log("1223")
            setTimeout(function () {
                component = $("#board-" + scope.id);
                component.droppable({
                    drop: function (event, ui) {
                        //console.log("Dropped in " + scope.id);
                        console.log(1789);
                        console.log(ui.note);
                    }
                });
            },100);

        },
        controllerAs: "scope",
        bindings: {
            id: "="
        }
    });