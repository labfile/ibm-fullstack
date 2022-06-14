  // var arr = [99,10,88,54,53,26,6,1,76,66,89,60,55,1,77,44,31];
       /*  var arr = new Array(20);

        console.log(arr.length);
        arr[30] = "hello there";
        console.log(arr); */
        var arr = [99,10,88,54,53,26,6,1,76,66,89,60,55,1,77,44,31,78,88];
        // console.log( arr.join(' ~ ') );
        // console.log(arr.sort());
       function sortfun(val1, val2){
            // 1 ascending
            // -1 descending
            // 0 no sorting
            if(val1 > val2){
                return 1
            }else if(val1 < val2){
                return -1
            }else{
                return 0
            }
       };

       console.log(arr.sort(sortfun));