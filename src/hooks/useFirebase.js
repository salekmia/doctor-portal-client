import { createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Firebase/firebase.init";

initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')
    const auth = getAuth();

    // Register Method
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const newUser = {email: email, displayName: name}
            setUser(newUser)
            // sent user to database
            saveUser(email, name, 'POST')
            // sent name to firebase after creaion account
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                  
              }).catch((error) => {
                  setError(error.message)
              });
            history.replace('/')
            setError('')
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => setIsLoading(false));
    }

    // Login Method
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination)
            const user = userCredential.user
            setUser(user);
            setError('')
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    // Google signin method
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const destination = location?.state?.from || '/';
            history.replace(destination)
            const user = result.user
            setUser(user)
            saveUser(user.email, user.displayName, 'PUT')
            setError('')
        }).catch((error) => {
            setError(error.message)
        })
        .finally(() => setIsLoading(false));
    }

    // User Observe
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                .then(idToken => {
                    setToken(idToken)
                })
            } else {
                setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    }, [])


    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setAdmin(data.admin)
        })
    }, [user.email])

    console.log('are you admin', admin)

    // Sign out Method
    const logOut = () => {
        signOut(auth)
        .then(() => {
            console.log('log out success')
        })
        .catch((error) => {
            setError(error.message)
        })
        .finally(() => setIsLoading(false));
    }

    // save user info to database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        error,
        isLoading,
        registerUser,
        loginUser, 
        signInWithGoogle,
        logOut, 
        admin, 
        token
    }
}
export default useFirebase;