function xxx (number)
	{
		if (typeof(number) !== "number")
			{return("неверный тип данных")} 
		else if(number/10000000 >= 1 && number/10000000 <10)
			{console.log(number)}
		else{return('неверное число')}//проверка, введено ли число и восьмизначное ли оно

		let arr = [];
		for (let i = 8; i>0; i--)
		{
			arr.push(Math.floor  ( number%Math.pow(10,i)/Math.pow(10,(i-1) ) )  );//разбиваем число на массив цифр
			
		}

		
		let evenodd = arr.map(item => item%2)
		let even = [];
		let odd = [];
		for(i = 0;i<8;i++)
		{
			if(evenodd[i] == 1){odd.push(i)}
			else{even.push(i)}
		}
		console.log(odd)
		
		let flag = 0;//единица при рядом стоящих нечетных
		let flag1 = 2;// плюс единица при переходе
		let diff1 ;
		let diff2 ;
		
		for(let i = 1; i<odd.length; i++)
		{
			if(odd[i]-odd[i-1] == 1)//если соседние элементы нечетного массива отличаются на единицу(нечетные стоят подряд)
			{
				console.log(flag, flag1)
				if(diff1 === undefined) {diff1 = (arr[odd[i]]-arr[odd[i-1]])}//если еще не было сравнения впаре нечетных - результат в diff1
				else if (diff2 === undefined) {diff2 = (arr[odd[i]]-arr[odd[i-1]])}//если было и diff1 не undefined, а diff2 undefined - в diff2
				
				flag = 1;
				if((flag==flag1)&&(odd[i]-odd[i-2] !== 2))//если число не является третим нечетным
															 // (засчитываем левые пары, если три нечетных подряд)
					{
					if(diff1>0&&diff2>0){return console.log('2000')}
						else{return console.log('1000');}
					}
				else if(odd[i]-odd[i-2] == 2){flag1 = 2}//третье нечетное число не считается
				else{flag1 = 0}//если нечетная пара первая
					
				
				console.log(flag, flag1)
				/*	console.log(odd[i]-odd[i-1]);
					console.log('flag ' + flag);
					console.log('flag1  ' + flag1);*/
			}

			if(odd[i]-odd[i-1] !== 1)
				{
					flag1 = flag1+1
				}
		}
		let sumodd = 0;
		let sumeven = 0;
		for(i = 0; i < arr.length; i++)
		{
			if(arr[i]%2 ==1){
				sumodd = sumodd + arr[i]
			}
			else{
				sumeven = sumeven + arr[i]
			}
		}

		if (sumeven>sumodd){return'0'}
		else{return console.log("промокод не корректен")}

	}

