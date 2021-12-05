class UserInfo {
    constructor(name, job) {
        this._name = name,
            this._job = job
    }
    getUserInfo(name, job) {
        this._name.value = name.textContent;
        this._job.value = job.textContent;
    }
    setUserInfo(name, job) {
        this._name.textContent = name.value;
        this._job.textContent = job.value;
    }
}

export default UserInfo;