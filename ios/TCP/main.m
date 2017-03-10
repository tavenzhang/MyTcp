/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import <UIKit/UIKit.h>
#import "LoggerClient.h"
#import "AppDelegate.h"

int main(int argc, char * argv[]) {
  
  @autoreleasepool {
   #ifdef DEBUG
    LoggerStart(LoggerGetDefaultLogger());
    LogMarker(@"thomas");
    #endif
    return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));
  }
}
