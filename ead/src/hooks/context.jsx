import { useState, useEffect, useContext, useCallback } from 'react';

const url = 'https://desafio.eadplataforma.com/api/1/users?token=';
const token = '8a71be68b6d578126db3b83c9a503431';

const AppContext = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState('');
    const [searchUser, setSearchUser] = useState('');
} 