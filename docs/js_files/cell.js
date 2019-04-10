/*********************************************************************
** Filename: cell.js
** Author: Aiden Nelson
** Date: 2/16/2019
** Description: Class for maze cells
*********************************************************************/

class Cell {

    // Function: cellConstructor
    // Parameters: row and column coordinants of cell
    // Description: Returns a maze cell object
    constructor(row, column) {
        this.row = row;
        this.column = column;
        this.links = {};
        this.type = "Normal";
        this.north = null;
        this.east = null;
        this.south = null;
        this.west = null;
    }

    // Function: getKey
    // Parameters: none
    // Description: Returns a unique key for the cell
    getKey() {
        return (String(this.row) + "," + String(this.column));
        //return "dog";
    }

    // Function: link
    // Parameters: Cell to link, bidirectional option
    // Description: Links the cell to another
    link(c, bidi) {
        this.links[c.getKey()] = true;
        if (bidi === true)
            c.link(this, false);
    }

    // Function: unlink
    // Parameters: Cell to unlink, bidirectional option
    // Description: unlinks the cell from another
    unlink(c, bidi) {
        delete this.links[c.getKey()];
        if (bidi === true)
            c.link(self, false);
    }

    // Function: getLinks
    // Parameters: none
    // Description: Returns a list of linked cells
    getLinks() {
        //return this.keys(this.links);
    }

    // Function: hasLink
    // Parameters: Cell
    // Description: Returns weither the cell has a link to the onther cell
    hasLink(c) {
        if (c === null)
            return false;
        else
            return (c.getKey() in this.links);
    }

    // Function: getNeighbors
    // Parameters: none
    // Description: Returns a list of neighboring cells
    getNeighbors() {
        list = [];
        if (this.north)
            list.push(this.north);
        if (this.east)
            list.push(this.east);
        if (this.south)
            list.push(this.south);
        if (this.west)
            list.push(this.west);
        return list;
    }
}
