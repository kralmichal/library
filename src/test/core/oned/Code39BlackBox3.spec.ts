
/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// package com.google.zxing.oned;

import BarcodeFormat from './../../../core/BarcodeFormat';
import MultiFormatReader from './../../../core/MultiFormatReader';
import AbstractBlackBoxSpec from './../common/AbstractBlackBox';

/**
 * @author Sean Owen
 */
class Code39BlackBox3Spec extends AbstractBlackBoxSpec {
    public constructor() {
        super('src/test/resources/blackbox/code39-3', new MultiFormatReader(), BarcodeFormat.CODE_39);
        this.addTest(17, 17, 0.0);
        this.addTest(17, 17, 180.0);
    }
}

describe('Code39BlackBox.3', () => {
    it('testBlackBox', done => {
        const test = new Code39BlackBox3Spec();
        return test.testBlackBox(done);
    });
});
