import moment from 'moment';
import uuid from 'uuid'

class Reflection {
    /**
     * class constructor
     */
    constructor(){
        this.reflections = [];
    }

    /**
     * reflection object
     */
    create(data){
        const newReflection = {
            id: uuid.v4(),
            success: data.success || '',
            lowPoint: data.lowPoint || '',
            takeAway: data.takeAway || '',
            createdDate: moment.now(),
            modifiedDate: moment.now()
        };
        this.reflections.push(newReflection);
        return newReflection;
    }
    
    findOne(id){
        return this.reflections.find(reflect => reflect.id ===id);
    }

    findAll(){
        return this.reflections;
    }

    update(id, data){
        const reflection = this.findOne(id);
        const index = this.reflections.indexOf(reflection);
        this.reflections[index].success = data['success'] || reflection.success;
        this.reflections[index].lowPoint = data['lowPoint'] || reflection.lowPoint;
        this.reflections[index].takeAway = data['takeAway'] || reflection.takeAway;
        this.reflections[index].modifiedDate = moment.now()
        return this.reflections[index];
    }

    delete(id) {
        const reflection = this.findOne(id);
        const index = this.reflections.indexOf(reflection);
        this.reflections.splice(index, 1);
        return {};
    }
}

export default new Reflection();