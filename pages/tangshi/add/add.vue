<template>
	<view>
		<view class="uni-forms">
			<view class="uni-forms-item">
				<text class="uni-forms-item__label">唐诗名：</text>
				<input type="text" v-model="title" :value="title" ref="title" placeholder="输入唐诗名" @input="titleInput" />
			</view>
			<view class="uni-forms-item">
				<text class="uni-forms-item__label">唐诗内容：</text>
				<textarea type="text" v-model="text" :value="text" ref="text" placeholder="输入内容" @input="textInput" />
			</view>
			<view class="uni-forms-item">
				<text class="uni-forms-item__label">作者：</text>
				<input type="text" v-model="author" :value="author" ref="author" placeholder="输入作者" @input="authorInput" />
			</view>
			<button type="default" value="" @click="submit">添加</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				text: '',
				author:''
			}
		},
		methods: {
			titleInput (e) {
				this.title = e.target.value
			},
			textInput (e) {
				this.text = e.target.value
			},
			authorInput (e) {
				this.author = e.target.value
			},
			submit() {
				console.log(this.title)
				uniCloud.callFunction({
					name: 'create',
					data: {
						title: this.title,
						text: this.text,
						author: this.author
					}
				}).then (res => {
					console.log(res)
				}) 
				uni.navigateTo({
					url: "/pages/tangshi/index/index"
				})
			}
		}
	}
</script>

<style>

</style>
