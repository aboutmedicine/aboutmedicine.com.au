<template>
	<div class="box"
	     :class="isOpen ? 'open' : ''"
	     :id="id"
	     :style="style"
	>
		<div class="box-icon" @click="open">
			<i class="fas fa-plus"></i>
		</div>
		<div class="box-content">
			<button type="button" class="ico close-box" @click="close">
				<i class="fas fa-times"></i>
			</button>

			<input class="box-title" placeholder="box" name="title"
			       @input="inputChange"
			       :value="text.title"
			>
			<textarea class="box-details" rows="3" placeholder="Type Here..." name="description"
			          @input="inputChange"
			          :value="text.description"
			></textarea>

			<button type="button" class="ico delete delete-box" @click="remove">
				<i class="fas fa-trash"></i>
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'mindmap-box',
		props: {
			id: Number,
			text: Object,
			isOpen: Boolean,
			position: {}
		},
		data: () => ({
			style: {
				top: '',
				left: '',
				opacity: 1
			},
			title: '',
			description: ''
		}),
		methods: {
			move(toPoint = {}) {
				this.style.top = `${toPoint.y}px`;
				this.style.left = `${toPoint.x}px`;
			},

			remove() {
				this.$store.commit('REMOVE_BOX', this.id);
			},

			inputChange(e) {
				console.log(e.target.value, e.target.name);
				this.$store.commit('EDIT_BOX', {
					key: e.target.name,
					value: e.target.value
				});
			},

			open() {
				this.$store.commit('SET_ACTIVE_BOX', this.id);
				this.style.opacity = 1;
			},

			close() {
				this.$store.commit('SET_ACTIVE_BOX', null);
				this.updatePosition();
			}
		}

	}
</script>

<style scoped>

	.box {
		position: absolute;
		z-index: 1;
	}

	.box-content {
		padding: 1em;
		background: var(--black);
		border-radius: 0px 20px 20px 20px;
		line-height: 1.3;
		text-align: right;
		position: absolute;
		left: 0;
		top: 0;
		min-width: 300px;
		min-height: 150px;
		display: none;
	}

	.box.open {}

	.box-icon {
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 36px;
		height: 36px;
		background: rgba(50, 50, 50, 0.8);
		border-radius: 0px 20px 20px 20px;
		color: #fff;
		font-size: 25px;
		text-align: center;
		transition: color ease-out .15s;
	}


	.box-icon:hover {
		color: var(--grey);
	}

	.box-title {
		font-size: 1.5em;
		font-weight: 600;
	}

	.box-details {
		font-size: 1em;
		font-weight: 600;
	}

	.close-box {
		position: absolute;
		right: 20px;
		top: 20px;
	}

	.box > textarea,
	.box > input {
		color: #fafafa;
		font-weight: 300;
		font-family: 'Avenir Next';
		margin-bottom: 10px;
		background: none;
		border: none;
		width: 95%;
		resize: none;
		text-align: left;
	}
</style>
