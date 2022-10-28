import cn from "./lang/zh-cn";
import en from "./lang/en";
declare const i18n: import("vue-i18n").I18n<{
    "zh-cn": {
        ELS_OPERATE: {
            add: string;
            edit: string;
            view: string;
            delete: string;
            deletes: string;
            import: string;
            upload: string;
            export: string;
            download: string;
            search: string;
            reset: string;
        };
        DICT_ATTRIBUTE: {
            onlyRead: string;
            onlyWrite: string;
        };
        DICT_FUNCODE: {
            status: string;
            disperse: string;
            keep: string;
            input: string;
        };
        ERR_WEBSOCKET: {
            NOT_SUPPORT: string;
            NO_CONNECT: string;
            CONNECT_ERROR: string;
            SEND_FAILED: string;
            NO_SUB_MSG: string;
        };
        d: {
            webTitle: string;
            add: string;
            cancel: string;
            confirm: string;
        };
    } & {
        name: string;
        el: {
            colorpicker: {
                confirm: string;
                clear: string;
            };
            datepicker: {
                now: string;
                today: string;
                cancel: string;
                clear: string;
                confirm: string;
                selectDate: string;
                selectTime: string;
                startDate: string;
                startTime: string;
                endDate: string;
                endTime: string;
                prevYear: string;
                nextYear: string;
                prevMonth: string;
                nextMonth: string;
                year: string;
                month1: string;
                month2: string;
                month3: string;
                month4: string;
                month5: string;
                month6: string;
                month7: string;
                month8: string;
                month9: string;
                month10: string;
                month11: string;
                month12: string;
                weeks: {
                    sun: string;
                    mon: string;
                    tue: string;
                    wed: string;
                    thu: string;
                    fri: string;
                    sat: string;
                };
                months: {
                    jan: string;
                    feb: string;
                    mar: string;
                    apr: string;
                    may: string;
                    jun: string;
                    jul: string;
                    aug: string;
                    sep: string;
                    oct: string;
                    nov: string;
                    dec: string;
                };
            };
            select: {
                loading: string;
                noMatch: string;
                noData: string;
                placeholder: string;
            };
            cascader: {
                noMatch: string;
                loading: string;
                placeholder: string;
                noData: string;
            };
            pagination: {
                goto: string;
                pagesize: string;
                total: string;
                pageClassifier: string;
                deprecationWarning: string;
            };
            messagebox: {
                title: string;
                confirm: string;
                cancel: string;
                error: string;
            };
            upload: {
                deleteTip: string;
                delete: string;
                preview: string;
                continue: string;
            };
            table: {
                emptyText: string;
                confirmFilter: string;
                resetFilter: string;
                clearFilter: string;
                sumText: string;
            };
            tree: {
                emptyText: string;
            };
            transfer: {
                noMatch: string;
                noData: string;
                titles: string[];
                filterPlaceholder: string;
                noCheckedFormat: string;
                hasCheckedFormat: string;
            };
            image: {
                error: string;
            };
            pageHeader: {
                title: string;
            };
            popconfirm: {
                confirmButtonText: string;
                cancelButtonText: string;
            };
        };
    };
    en: {
        loginPage: {
            login: string;
            sysName: string;
            userName: string;
            pwd: string;
            inputUserName: string;
            inputPWD: string;
            personal: string;
            logout: string;
        };
        menuPage: {
            home: string;
            subEquip: string;
            ruleEngine: string;
            dataForward: string;
            driveManage: string;
            networkDiag: string;
            logQuery: string;
            changePwd: string;
            intellReasoning: string;
        };
        homePage: {
            totalEquip: string;
            onlineEquip: string;
            forwardNode: string;
            onlineForward: string;
            collectedData: string;
            gatewayInfor: string;
            serverInfor: string;
            CPUInfor: string;
            attribute: string;
            value: string;
            memInfor: string;
            memory: string;
            gatewayID: string;
            gatewayName: string;
            deplocation: string;
            dataForCon: string;
            serName: string;
            serIP: string;
            operSys: string;
            sysArch: string;
            numCores: string;
            userUtil: string;
            sysUtil: string;
            currentRate: string;
            totalMem: string;
            usedMem: string;
            freeMem: string;
            utilRate: string;
            diskInfor: string;
            driveLetPath: string;
            fileSys: string;
            driveLetType: string;
            totalSize: string;
            availSize: string;
            usedSize: string;
            perUsed: string;
            dataForConfi: string;
            mostOnce: string;
            leastOnce: string;
            proType: string;
            serverAdd: string;
            serverAddInput: string;
            serPort: string;
            userName: string;
            password: string;
            connected: string;
            disconnect: string;
        };
        networkDiagPage: {
            localNet: string;
            ipAdd: string;
            netMask: string;
            deGateway: string;
            diagTool: string;
            inputIP: string;
            copy: string;
            clear: string;
            copySuc: string;
        };
        changePwdPage: {
            changePwd: string;
            pwdDisaccord: string;
            origPwd: string;
            newPwd: string;
            conPwd: string;
            inputConPwd: string;
            changePwdSucc: string;
            reminder: string;
            inputNewPwd: string;
            minLen6: string;
        };
        logQueryPage: {
            viewPara: string;
            operCon: string;
            operTime: string;
            startDate: string;
            endDate: string;
            ipAdd: string;
            accType: string;
            operRes: string;
            reqPara: string;
            returnPara: string;
        };
        driveManagePage: {
            normal: string;
            toBeUpdated: string;
            downloading: string;
            noDownload: string;
            downFail: string;
            driveName: string;
            protocol: string;
            drivePro: string;
            fileName: string;
            programClass: string;
            version: string;
            updateTime: string;
            state: string;
            updateTipsMess: string;
            updateSuccess: string;
            update: string;
            download: string;
            refreshList: string;
        };
        intellReasonPage: {
            modelView: string;
            modelName: string;
            version: string;
            updateTime: string;
            fileDownState: string;
            appDeviceNum: string;
            whetherEnable: string;
            refreshList: string;
            modelInfor: string;
            creationTime: string;
            localPath: string;
            modelDes: string;
            modelAppEq: string;
            equipNo: string;
            equipName: string;
            proType: string;
            downAgain: string;
            failView: string;
        };
        d: {
            webTitle: string;
            add: string;
            cancel: string;
            confirm: string;
        };
    } & {
        name: string;
        el: {
            colorpicker: {
                confirm: string;
                clear: string;
                defaultLabel: string;
                description: string;
            };
            datepicker: {
                now: string;
                today: string;
                cancel: string;
                clear: string;
                confirm: string;
                dateTablePrompt: string;
                monthTablePrompt: string;
                yearTablePrompt: string;
                selectedDate: string;
                selectDate: string;
                selectTime: string;
                startDate: string;
                startTime: string;
                endDate: string;
                endTime: string;
                prevYear: string;
                nextYear: string;
                prevMonth: string;
                nextMonth: string;
                year: string;
                month1: string;
                month2: string;
                month3: string;
                month4: string;
                month5: string;
                month6: string;
                month7: string;
                month8: string;
                month9: string;
                month10: string;
                month11: string;
                month12: string;
                week: string;
                weeks: {
                    sun: string;
                    mon: string;
                    tue: string;
                    wed: string;
                    thu: string;
                    fri: string;
                    sat: string;
                };
                weeksFull: {
                    sun: string;
                    mon: string;
                    tue: string;
                    wed: string;
                    thu: string;
                    fri: string;
                    sat: string;
                };
                months: {
                    jan: string;
                    feb: string;
                    mar: string;
                    apr: string;
                    may: string;
                    jun: string;
                    jul: string;
                    aug: string;
                    sep: string;
                    oct: string;
                    nov: string;
                    dec: string;
                };
            };
            inputNumber: {
                decrease: string;
                increase: string;
            };
            select: {
                loading: string;
                noMatch: string;
                noData: string;
                placeholder: string;
            };
            dropdown: {
                toggleDropdown: string;
            };
            cascader: {
                noMatch: string;
                loading: string;
                placeholder: string;
                noData: string;
            };
            pagination: {
                goto: string;
                pagesize: string;
                total: string;
                pageClassifier: string;
                deprecationWarning: string;
            };
            dialog: {
                close: string;
            };
            drawer: {
                close: string;
            };
            messagebox: {
                title: string;
                confirm: string;
                cancel: string;
                error: string;
                close: string;
            };
            upload: {
                deleteTip: string;
                delete: string;
                preview: string;
                continue: string;
            };
            slider: {
                defaultLabel: string;
                defaultRangeStartLabel: string;
                defaultRangeEndLabel: string;
            };
            table: {
                emptyText: string;
                confirmFilter: string;
                resetFilter: string;
                clearFilter: string;
                sumText: string;
            };
            tree: {
                emptyText: string;
            };
            transfer: {
                noMatch: string;
                noData: string;
                titles: string[];
                filterPlaceholder: string;
                noCheckedFormat: string;
                hasCheckedFormat: string;
            };
            image: {
                error: string;
            };
            pageHeader: {
                title: string;
            };
            popconfirm: {
                confirmButtonText: string;
                cancelButtonText: string;
            };
        };
    };
}, {}, {}, string, false>;
export default i18n;
export { cn as zhcn, en };
