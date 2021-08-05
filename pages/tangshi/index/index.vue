<template>
	<view>
		<button type="primary" size="mini" @click="toAdd">添加唐诗</button>
		<view class="ts-search">
			<input class="search-input" type="text" value="" placeholder="请输入唐诗名" />
		</view>
		<view class="content" v-if="!loading">
			<view class="list" v-for="item in data" :key="item._id"  @click="read(item._id)">
				<view class="list-item">
					<text>{{item.title}}</text>
					<text>{{item.author}}</text>
				</view>
				<view class="">
					{{item.text}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,
				data: []
			}
		},
		onLoad() {
			this.list()
		},
		onReady: function (res) {
			this.vieoContext = uni.createVideoContext('myVideo')
		},
		methods: {
			list(e){
				this.loading = true
				uni.showLoading({
					title: '加载中。。。'
				});
				uniCloud.callFunction({
					name: 'list',
					data: {
						limit: 10,
						offset: 0,
						keyWord: e ? e.detail.value : ''
					}
				}).then(res => {
				  console.log(res.result.data, 0)
				  // data = res.result.data
				  this.data = res.result.data
				  uni.hideLoading();
				  this.loading = false
				})
			},
			read(id){
				console.log('跳转'+id)
				uni.navigateTo({
					url: '/pages/tangshi/detail/detail?id='+id
				})
			},
			toAdd() {
				uni.navigateTo({
					url: '/pages/tangshi/add/add'
				})
			}
		}
	}
</script>

<style>

</style>
