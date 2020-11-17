export function mock<T>(obj: object): T {
    return obj as any as T
}