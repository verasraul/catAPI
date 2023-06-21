
import dotenv from 'dotenv';
dotenv.config();


const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;
const dropdown = document.querySelector("select");
const button = document.querySelector("#try-me");
const picDisplay = document.querySelector("#catpic");


let response = async 