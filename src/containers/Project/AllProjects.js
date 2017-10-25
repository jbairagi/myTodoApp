import React from 'react';
import ManageProjects from './ManageProjects';
import { connect } from 'react-redux';
import TitleHead from '../../components/TitleHead';

class AllProjects extends React.Component {
	render() {
		return (
			<div>
				<TitleHead title='All Projects' />
				<ul className="list-group">
					{
						this.props.projects.map(task => <ManageProjects task={task} taskId={task._id} key={task._id} />)
					}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	projects: state.projects.allProjects
});

export default connect(mapStateToProps)(AllProjects);
