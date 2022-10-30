import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  linkWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";
import LoadingComponent from "../components/core/Loading";

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [AuthError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          profilePicture: user.photoURL,
          provider: user.providerData,
          verified: user.emailVerified
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Sign Up Function
  const handleSignUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign In Function
  const handleSignIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => console.log('Logged In!'))
      .catch((error) => {
        setAuthError(error.message)
      })
      return
  };

  // Sign In (Google) Function
  const handleSignInGoogle = () => {
    // Provider Settings
    const provider = new GoogleAuthProvider();
    auth.languageCode = "en";

    // Pop Up window
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
      })
      .catch((error) => {
        setAuthError(`${error.code}: ${error.message}`);
        return;
      });

    return;
  };

  // Sign In (GitHub) Function
  const handleSignInGitHub = (email: string, password: string) => {
    // Provider Settings
    const provider = new GithubAuthProvider();
    auth.languageCode = "en";

    // Pop Up window
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
      })
      .catch((error) => {
        if (error.code === "auth/account-exists-with-different-credential")
          return setAuthError(
            "Error 409: There is an email account on the platform for this user."
          );

        return;
      });

    return;
  };

  // Sign Out Function
  const handleLogout = async () => {
    setUser(null);
    await signOut(auth);
  };

  // Link Providers
  const handleLinkProviders = (provider: string) => {
    if (provider === "") return;
    if (auth.currentUser === null) return

    if (provider === "github") {
      // Provider Settings
      const provider = new GithubAuthProvider();
      auth.languageCode = "en";

      linkWithPopup(auth.currentUser, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const user = result.user;
        })
        .catch((error) => {
          setAuthError("There has been an error with linking your account, please try again later!")
        });
    }
  };

  // Return a provider
  return (
    <AuthContext.Provider
      value={{
        user,
        AuthError,
        handleLogout,
        handleSignIn,
        handleSignUp,
        handleSignInGoogle,
        handleSignInGitHub,
        handleLinkProviders,
      }}
    >
      {loading ? <LoadingComponent /> : children}
    </AuthContext.Provider>
  );
};
