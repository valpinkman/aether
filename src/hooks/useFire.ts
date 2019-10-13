import { useCallback } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'

import { Serie } from '../types/users'
import firebase from '../api/firebase'

const auth = firebase.auth()

const login = async (email: string, password: string) => {
  return auth.signInWithEmailAndPassword(email, password)
}

const logout = async () => {
  return auth.signOut()
}

const signup = async (email: string, password: string) => {
  return auth.createUserWithEmailAndPassword(email, password)
}

export function useUser() {
  const [user, loading, error] = useAuthState(auth)

  return {
    user,
    loading,
    error,
    login,
    logout,
    signup,
  }
}

export function useIsLoggedIn() {
  const [user, loading, error] = useAuthState(auth)

  return Boolean(user && !loading && !error)
}

export function useUserCollections(userId: string) {
  return useCollection(
    firebase
      .firestore()
      .collection('collections')
      .where('userId', '==', userId)
  )
}

export function useCollections(userId: string) {
  const ref = firebase.firestore().collection('collections')

  const create = useCallback(
    async (name: string, series: Serie[] = [], isPrivate = true) => {
      const docRef = await ref.add({
        name,
        userId,
        series,
        isPrivate,
      })
      console.log('Document written with ID: ', docRef.id)
    },
    [ref, userId]
  )

  const updateField = useCallback(
    async (field: string, value: string) => {
      await ref.doc(userId).update({
        [field]: value,
      })
      console.log('Document successfully updated!')
    },
    [ref, userId]
  )

  const updateSeries = useCallback(
    async (serieId: string) => {
      await ref.doc(userId).update({
        series: firebase.firestore.FieldValue.arrayUnion(serieId),
      })
      console.log('Document successfully updated!')
    },
    [ref, userId]
  )

  return {
    create,
    updateField,
    updateSeries,
  }
}
