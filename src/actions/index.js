export const login = (userCredentials) => {
	return {
		type: 'LOGIN',
		userCredentials
	};
};

export const projects = () => {
	return {
		type: 'PROJECT'
	};
};

export const addNewProject = (projectInfo) => {
	return {
		type: 'ADD_PROJECT',
		projectInfo
	};
};

export const addNewUser = (userInfo) => {
	return {
		type: 'ADD_USER',
		userInfo
	};
};

export const updateProjectDescription = (project) => {
	return {
		type: 'UPDATE_DESCRIPTION',
		project
	};
};

export const updateBeginningDate = (project) => {
	return {
		type: 'UPDATE_BEGINNING_DATE',
		project
	};
};

export const updateDueDate = (project) => {
	return {
		type: 'UPDATE_DUE_DATE',
		project
	};
};

export const deleteProject = (id, projectInfo) => {
	return {
		type: 'REMOVE_PROJECT',
		id,
		projectInfo
	};
};

export const clearStore = () => {
	return {
		type: 'CLEAR_STORE'
	};
};


export const setLoginStatus = isLoggedIn => {
	return {
		type: 'SET_LOGIN_STATUS',
		isLoggedIn
	};
};

export const setUser = user => {
	return {
		type: 'SET_USER',
		user
	};
};

export const setUserRole = isRoleManager => {
	return {
		type: 'SET_USER_ROLE',
		isRoleManager
	};
};