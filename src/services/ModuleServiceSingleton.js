const MODULE_SERVIVE_URL = "http://course-server-2018fall/api";

export default class ModuleServiceSingleton {
    static createModule(cid,module) {
        return fetch(MODULE_SERVIVE_URL+"/course"+"/"+cid+"/module", {
            body: JSON.stringify(module),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json())
    }

    static findAllModule(cid) {
        return fetch(MODULE_SERVIVE_URL+"/course/"+cid+"/module")
            .then(response => {return response.json()});
    }

    static findModuleById(mid) {
        return fetch(MODULE_SERVIVE_URL + "/module/" + mid)
            .then(response => {return response.json()})
    }

    static updateModuleById(mid,module) {
        return fetch(MODULE_SERVIVE_URL + "/module/" + mid, {
            body:JSON.stringify(module),
             headers: {
                    'Content-Type': 'application/json'
             },
              method: 'PUT'
             }).then(response => response.json())
    }

    static deleteModule(mid) {
        return fetch(MODULE_SERVIVE_URL + "/module/" + mid,{method:"DELETE"})
            .then(response => {return response.json()});
    }
}