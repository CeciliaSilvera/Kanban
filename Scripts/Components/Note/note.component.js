angular.module("baseModule")
    .component("note", {
        templateUrl: "Scripts/Components/Note/Note.html",
        controller: function () {
            var scope = this;
            var component = {};
            setTimeout(function () {
                component = $("#note-" + scope.id);
                component.draggable();
            }, 100);
        },
        controllerAs: "scope",
        bindings: {
            id: "=",
            body: "="
        }
    });