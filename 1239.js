function dfs(arr,con,res,ind){
    if(ind==arr.length){
        con.push(res)
        return;
    }
   dfs(arr,con,res+"",ind+1);
   dfs(arr,con,res+arr[ind],ind+1);
}
var maxLength = function(arr) {
   let con=[]
   let maxi=0
   dfs(arr,con,"",0);
   for(let i=0;i<con.length;i++){
       let hash={}
       let count=0
        for(let j=0;j<con[i].length;j++){
            if(hash[con[i][j]]){
                hash=[]
                count=0
                break
            }else{
                hash[con[i][j]]=1
                count++
            }
        }
        maxi=Math.max(maxi,count)
   }
   return maxi
   
};