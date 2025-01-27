/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import * as vscode from 'vscode'

/**
 * Components associated with {@link module:vscode.commands}.
 */
export interface Commands {
    /**
     * See {@link module:vscode.commands.executeCommand}.
     */
    execute<T>(command: string, ...rest: any[]): Thenable<T | undefined>
}

/**
 * @deprecated Use `./commands2.ts` instead when possible.
 */
export namespace Commands {
    export function vscode(): Commands {
        return new DefaultCommands()
    }
}

class DefaultCommands implements Commands {
    public execute<T>(command: string, ...rest: any[]): Thenable<T | undefined> {
        return vscode.commands.executeCommand(command, ...rest)
    }
}
