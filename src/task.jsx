export const Task = (props) => {
	return (
		<div>
			<h1>{props.taskName}</h1>
			<button onClick={() => props.del(props.task)}>Del</button>
		</div>
	)
}
