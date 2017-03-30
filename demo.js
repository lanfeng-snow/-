var myarr=[1,1,1,1,2,2,3,3,4,7,8,9,9,9];

var arr=[];//定义一个长度为34  0-33的数组
//循环33次初始化arr  值 都为0 
for(var i=0;i<34;i++){
	arr[i]=0;
}
for(var i=0;i<myarr.length;i++){
	arr[myarr[i]]+=1;//arr中添加数量  
}
//去除对子 判断是否能胡
function double(){	//去除对子
	for(var i=0;i<34;i++){
		if(arr[i]>=2){ //便利所有的对子
			arr[i]-=2; //减去对子后 运行4n
			if(foo4X3()){
				arr[i]+=2;
				return true;
			}
		}
	}
	return false;
}
//检测3n
function foo4X3(){
	var arrnew=arr;
	var n=0;// 记录4n数量
	for(var i=0;i<34;i++){}//遍历所有内容 查看存在数量

	//分段
	for(var j=0;j<3;J+=9){// 0  9  18 分段 变量
		for(var k=0;k<9;k++){//每种数量为9个  0-8  9-17 18-26  3组
			if(arrnew[k+j]>=3){  // 某个位置上的数量 大于等于3时
				arrnew[k+j]-=3;  //减去3个  组成n 让n++
				n++;		
			}
			if(k<7&&arrnew[k+j]&&arrnew[k+j+1]&&arrnew[k+j+2]){// 存在顺子  k<7为了减少 8 9的影响
				arrnew[k+j]--;
				arrnew[k+j+1]--;
				arrnew[k+j+2]--;
				n++;
			}
		}
	}
	for(var i=27;i<34;i++){//遍历 27-33的数组
		if(arrnew[i]>=3){	
			arrnew[i]-=3;
			n++;
		}
	}
	if(n==4){return true}else{return false}	
}
//7大对 
function seven(){
	for(var i=0;i<34;i++){
		if(arr[i]!=2&&arr[i]!=0){//如果 有一个牌不是2张 并且存在
			return false
		}
		return true
	}
}
//十三幺
function thirteen(){
	for(var i=0;i<3;i+=9){//3种花色 0 9 18
		if(arr[i]=0||arr[i+8]=0){ //0 8   9 17  18 26 
			return false
		}
	}
	for(var i=27; i<34;i++){//风箭 存在
		if(arr[i]=0){
			return false
		}
	}
	return true
}