var pegEdges = [
    [3, 5],
    [6, 8],
    [7, 9],
    [0, 5, 10, 12],
    [11, 13],
    [0, 3, 12, 14],
    [1, 8],
    [2, 9],
    [1, 6],
    [2, 7],
    [3, 12],
    [4, 13],
    [3, 5],
    [4, 11],
    [5, 12],
];
var removePegEdges = [
    [1, 2],
    [3, 4],
    [4, 5],
    [1, 4, 6, 7],
    [7, 8],
    [2, 4, 8, 9],
    [3, 7],
    [4, 8],
    [4, 7],
    [5, 8],
    [6, 11],
    [7, 12],
    [7, 8],
    [8, 12],
    [9, 13],
];

var activePiece = null;

$('.dot').click(function() {
    console.log('clicked');
    if (activePiece === null) {
        if ($(this).hasClass('full')) {
            $(this).addClass('highlight');
            activePiece = $(this);
        }
    } else {
        var startId = activePiece.attr('id');
        var endId = Number($(this).attr('id'));
        var verticesAdjacentToStart = pegEdges[startId];
        var innerGraphIndex = verticesAdjacentToStart.indexOf(endId);
        if (innerGraphIndex != -1 &&
            !$(this).hasClass('full')) {
            console.log('ligit move');
            var idToRemove = removePegEdges[startId][innerGraphIndex];
            if ($('#' + idToRemove).hasClass('full')) {
                $('#' + idToRemove).removeClass('full');
                $('#' + startId).removeClass('full');
                $('#' + endId).addClass('full');
            }
        } else {
            console.log('thas not it');
        }
        activePiece.removeClass('highlight')
        activePiece = null;
    }
});
