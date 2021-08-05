<template>
	<view v-if="!loading">
		{{detail.title}}--{{detail.author}} <br>
		{{detail.text}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: {},
				loading: false
			}
		},
		onLoad(option) {
			this.read(option.id)
		},
		methods: {
			read (id) {
				this.loading = true
				uni.showLoading({
					title: "加载中。。。"
				});
				uniCloud.callFunction({
					name: 'read',
					data: {id}
				}).then(res => {
					console.log(res)
					this.detail = res.result.data[0]
				})
				this.loading = false
				uni.hideLoading()
			}
		}
	}
</script>

<style>

</style>
