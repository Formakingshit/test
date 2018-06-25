execute();

function execute() {
    let number;
    number = +prompt("Input task number(1-3):");

    if (number == 1) {
        task1();
    }
    else if (number == 2) {
        task2();
    }
    else if (number == 3) {
        task3();
    }
    else {
        alert("Wrong number, repeat please (Ctrl + R)")
    }
}

function task1() {
    let size = prompt("Array Size:");
    let arr = new Array();
    let iterator = 0;

    init();
    iteration();
    tableCreate();

    function init() {
        for (let i = 0; i < size; i++) {
            arr[i] = new Array();
        }
    }

    function iteration() {
        for (let i = 0; i < size / 2; i++) {
            for (let iUp = i; iUp < size - i; iUp++) {
                arr[i][iUp] = ++iterator;
            }

            for (let iRight = i + 1; iRight < size - i - 1; iRight++) {
                arr[iRight][size - i - 1] = ++iterator;
            }

            for (let iDown = size - i - 1; iDown > i; iDown--) {
                arr[size - i - 1][iDown] = ++iterator;
            }

            for (let iLeft = size - i - 1; iLeft > i; iLeft--) {
                arr[iLeft][i] = ++iterator
            }
        }
    }

    function tableCreate() {
        var body = document.getElementsByTagName('body')[0];
        var tbl = document.createElement('table');
        tbl.setAttribute('border', '1');
        var tbdy = document.createElement('tbody');
        var letterCount = 0;

        for (var i = 0; i < size; i++) {
            var tr = document.createElement('tr');
            for (var j = 0; j < size; j++) {
                var td = document.createElement('td');
                var t = document.createTextNode(arr[i][j]);

                td.appendChild(t);
                tr.appendChild(td)
            }

            tbdy.appendChild(tr);
        }

        tbl.appendChild(tbdy);
        body.appendChild(tbl)
    }
}

function task2() {
//Here we can write another array, if we want that
    let array1 = [11, 22, 48, 54];
    let array2_1 = [11, 48, 54, 22, 22, 48];
    let array2_2 = [11, 12, 48, 54];

    alert("Look inside code--> " + equals(array1, array2_1));

    function equals(arr1, arr2) {
        arr1.sort();
        arr2 = unique(arr2);

        if (arr1 === arr2) return true;
        if (arr1 == null || arr2 == null) return false;
        if (arr1.length != arr2.length) return false;

        for (let i = 0; i < arr1.length; ++i) {
            if (arr1[i] != arr2[i]) return false;
        }
        return true;
    }

//For sort and making second parameters equals() unique
    function unique(arr) {
        let obj = {};

        for (let i = 0; i < arr.length; i++) {
            var str = arr[i];
            obj[str] = true;
        }

        return Object.keys(obj);
    }
}

function task3() {
    function Emitter(n) {
        this.emit = function(status, place) {
            this.status = status;
            this.place = place;

            if(this.status == "connect"){
                alert('We have been connected to ' + place);
            }
            else alert('We disconnected from ' + place);
        }
    }

    const emitter = new Emitter();

    emitter.emit('connect', 'http-server');
    emitter.emit('connect', 'websocket');
    emitter.emit('disconnect', 'websocket');
    emitter.emit('disconnect', 'http-server');



}