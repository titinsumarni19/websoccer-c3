import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";


export const SEASON_SCHEDULE:Schedule[] = [
    {id:1,playingDate:new Date(2021,08,10),HomeTeam: 'Persija', 
    AwayTeam:'Bali United',HomeScore:3,AwayScore:2,RefName:'Joko',
    notes:'Pertandingan Overtime'},
    {id:2,playingDate:new Date(2021,08,11),HomeTeam: 'Evos', 
    AwayTeam:'Bali OK',HomeScore:3,AwayScore:2,RefName:'Rino',
    notes:'Pertandingan OK'},
    {id:3,playingDate:new Date(2021,08,12),HomeTeam: 'RRQ', 
    AwayTeam:'Bali Baru',HomeScore:3,AwayScore:2,RefName:'Pina',
    notes:'Pertandingan Ngelek'},
    {id:4,playingDate:new Date(2021,08,13),HomeTeam: 'Madrid', 
    AwayTeam:'Bali Lama',HomeScore:3,AwayScore:2,RefName:'Joki',
    notes:'Pertandingan Rusuh'},
    {id:5,playingDate:new Date(2021,08,14),HomeTeam: 'Persija Solo', 
    AwayTeam:'PERIB',HomeScore:3,AwayScore:2,RefName:'Tomi',
    notes:'Pertandingan Aman'},
]
export const TEAM:Team []= [
    {id:1,name:'Evos',type:'over 30'},
    {id:2,name:'Persija',type:'over 30'},
    {id:3,name:'RRQ',type:'over 30'},
    {id:4,name:'Persis',type:'over 30'},
    {id:5,name:'Evos1',type:'over 30'},
    {id:6,name:'Evos2',type:'over 30'},
]