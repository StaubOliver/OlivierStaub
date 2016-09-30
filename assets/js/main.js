var cv = angular.module('cv', [])
.controller('content', function($scope, $http, $compile){

    

    $scope.lang = "fr";
    $scope.sections_text = sections_text[$scope.lang];
    $scope.section = 0;
    
    $('#bigtext').bigtext();

    $scope.content = {};

    $scope.new_section = function(section)
    {
        if (section != $scope.section)
        {
            $scope.section = section;
            $scope.content = {};
            if (section == 1)
            {
                $scope.content = formation_text[$scope.lang];
            }
        }
        
    }

    $scope.new_section(1);

});


