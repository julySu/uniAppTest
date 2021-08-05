'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	// 获取表‘tangshi’的集合对象
	const collection = db.collection('tangshi')
	const res = await collection.limit(event.limit).skip(event.offset).where({
		title: new RegExp(event.keyWord)
	}).get()
	//返回数据给客户端
	return res
};
