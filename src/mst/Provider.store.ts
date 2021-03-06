
import { types } from "mobx-state-tree";
import Person from './Person.model';
import Student from './Student.model';

export const Root = types
    .model({
        persons: types.optional(types.array(Person), []),
        students: types.optional(types.array(Student), []),
        isFetchedWithLocalStorage: false
    })
    .actions((self) => ({
        updateField<Key extends keyof typeof self>(field: Key, value: typeof self[Key]) {
            self[field] = value
            this.saveToLocalStorage();
        },
        getPersonById(id: string){
            return self.persons.filter(item=>item.id===id)[0]
        },
        saveToLocalStorage() {
            localStorage && localStorage.setItem('Lab5_Data', JSON.stringify({persons:self.persons, students:self.students}))
        },
        clearLocalStorage(){
            localStorage && localStorage.setItem('Lab5_Data', JSON.stringify({persons:[], students: []}))
        },
        setLocalStorageTestData() {
            localStorage && localStorage.setItem('Lab5_Data', JSON.stringify(initialState))
            setTimeout(() => window.location.reload(), 2000);
            
        }
    }))
    .actions((self) => ({
        getLocalStorage(){
            const isLSData = localStorage && localStorage.getItem('Lab5_Data')
            const lsData = isLSData ? JSON.parse(localStorage.getItem('Lab5_Data') || '') : {}
            if(!self.isFetchedWithLocalStorage){
                if(lsData && lsData.persons && lsData.persons.length === 0 && lsData.students && lsData.students.length === 0) {
                    self.saveToLocalStorage()
                }
                else {
                    self.updateField("persons", lsData.persons || [])
                    self.updateField("students", lsData.students || [])
                }
                self.isFetchedWithLocalStorage = true
            }
            return lsData
        },
    }))
 

const rootStore = Root.create({})
const initialState = {
    persons: [
        {
            id: 'p-01',
            firstName: "Focsa",
            secondName:"Daniel",
            gender:"male",
            age:21,
            height:180
        },
        {
            id: 'p-02',
            firstName: "Babei",
            secondName:"Vadim",
            gender:"male",
            age:23,
            height:200
        },
        {
            id: 'p-03',
            firstName: "Focsa",
            secondName:"Paula",
            gender:"famle",
            age:18,
            height:180
        },
    ],
    students: [
    {
        id: 'st-01',
        personId: 'p-01',
        university: "UTM",
        speciality:"RM"
    },
    {
        id: 'st-02',
        personId: 'p-02',
        university: "USM",
        speciality:"TI"
    },
    {
        id: 'st-03',
        personId: 'p-03',
        university: "liceu",
        speciality:"trei puncte"
    }
    ]
}
export default rootStore
//   if (process.browser) {
    // const data = localStorage.getItem("rootState");
    // if (data) {
    //     const json = JSON.parse(data);
    //     if (Root.create(json)) {
    //         initialState = Root.create(json);
    //     }
    // }
//   }
//   onSnapshot(rootStore, (snapshot) => {
//     console.log("Snapshot: ", snapshot);
//     localStorage.setItem("rootState", JSON.stringify(snapshot));
//   });

// export type RootInstance = Instance<typeof Root>;
// const RootStoreContext = createContext<null | RootInstance>(null);
// export const Provider = RootStoreContext.Provider;
// export function useMst() {
//     const store = useContext(RootStoreContext);
//     if (store === null) {
//         throw new Error("Store cannot be null, please add a context provider");
//     }
//     console.log(store)
//     return store;
// }