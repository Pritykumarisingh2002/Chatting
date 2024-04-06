import react, { createContext } from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
        value={{
            user,
            setUser,
            login: async(phone, password) => {
                try {
                    await auth().signInWithPhoneAndPassword(phone, password);
                } catch(e) {
                    console.log(e)

                }
                },
                signup: async (phone, password) => {
                    try {
                        await auth().createUserWithPhoneAndPassword(phone, password);
                    } catch(e) {
                        console.log(e)
                    }
                    },
                    logout: async () => {
                        try {
                            await auth().signOut();
                        } catch(e){
                            console.log(e);
                        }
                        }
                   
        }}
        >
            {children}
        </AuthContext.Provider>
        
    );
};